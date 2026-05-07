import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  generateMigrationSQL,
  generateMigrationFilename,
  type SchemaChangeRequest,
} from "~/lib/migration-generator.server";
import { createMigrationPR } from "~/lib/github-pr.server";

const VALID_TYPES = [
  "add_column",
  "add_table",
  "add_index",
  "drop_column",
  "rename_column",
] as const;

function validateRequest(body: unknown): SchemaChangeRequest {
  if (!body || typeof body !== "object") {
    throw new Response("Request body must be a JSON object", { status: 400 });
  }

  const data = body as Record<string, unknown>;

  if (!data.type || !VALID_TYPES.includes(data.type as (typeof VALID_TYPES)[number])) {
    throw new Response(
      `Invalid type. Must be one of: ${VALID_TYPES.join(", ")}`,
      { status: 400 }
    );
  }

  switch (data.type) {
    case "add_column":
      if (!data.table || typeof data.table !== "string")
        throw new Response("table is required (string)", { status: 400 });
      if (!data.column || typeof data.column !== "string")
        throw new Response("column is required (string)", { status: 400 });
      if (!data.dataType || typeof data.dataType !== "string")
        throw new Response("dataType is required (string)", { status: 400 });
      return {
        type: "add_column",
        table: data.table,
        column: data.column,
        dataType: data.dataType,
        nullable: data.nullable as boolean | undefined,
        defaultValue: data.defaultValue as string | undefined,
      };

    case "add_table":
      if (!data.table || typeof data.table !== "string")
        throw new Response("table is required (string)", { status: 400 });
      if (!Array.isArray(data.columns) || data.columns.length === 0)
        throw new Response("columns is required (non-empty array)", { status: 400 });
      return {
        type: "add_table",
        table: data.table,
        columns: data.columns as AddTableColumn[],
      };

    case "add_index":
      if (!data.table || typeof data.table !== "string")
        throw new Response("table is required (string)", { status: 400 });
      if (!Array.isArray(data.columns) || data.columns.length === 0)
        throw new Response("columns is required (non-empty string array)", { status: 400 });
      return {
        type: "add_index",
        table: data.table,
        columns: data.columns as string[],
        unique: data.unique as boolean | undefined,
      };

    case "drop_column":
      if (!data.table || typeof data.table !== "string")
        throw new Response("table is required (string)", { status: 400 });
      if (!data.column || typeof data.column !== "string")
        throw new Response("column is required (string)", { status: 400 });
      return { type: "drop_column", table: data.table, column: data.column };

    case "rename_column":
      if (!data.table || typeof data.table !== "string")
        throw new Response("table is required (string)", { status: 400 });
      if (!data.oldName || typeof data.oldName !== "string")
        throw new Response("oldName is required (string)", { status: 400 });
      if (!data.newName || typeof data.newName !== "string")
        throw new Response("newName is required (string)", { status: 400 });
      return {
        type: "rename_column",
        table: data.table,
        oldName: data.oldName,
        newName: data.newName,
      };

    default:
      throw new Response("Unknown type", { status: 400 });
  }
}

type AddTableColumn = {
  name: string;
  dataType: string;
  nullable?: boolean;
  defaultValue?: string;
  primaryKey?: boolean;
};

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, { status: 400 });
  }

  let changeRequest: SchemaChangeRequest;
  try {
    changeRequest = validateRequest(body);
  } catch (e) {
    if (e instanceof Response) {
      return json({ error: await e.text() }, { status: e.status });
    }
    throw e;
  }

  let sql: string;
  let filename: string;
  try {
    sql = generateMigrationSQL(changeRequest);
    filename = generateMigrationFilename(changeRequest);
  } catch (e) {
    const message = e instanceof Error ? e.message : "SQL generation failed";
    return json({ error: message }, { status: 400 });
  }

  let titleDesc: string;
  switch (changeRequest.type) {
    case "add_column":
      titleDesc = `Add column ${changeRequest.column} to ${changeRequest.table}`;
      break;
    case "add_table":
      titleDesc = `Create table ${changeRequest.table}`;
      break;
    case "add_index":
      titleDesc = `Add index on ${changeRequest.columns.join(", ")} to ${changeRequest.table}`;
      break;
    case "drop_column":
      titleDesc = `Drop column ${changeRequest.column} from ${changeRequest.table}`;
      break;
    case "rename_column":
      titleDesc = `Rename column ${changeRequest.oldName} to ${changeRequest.newName} on ${changeRequest.table}`;
      break;
  }

  try {
    const result = await createMigrationPR({
      sql,
      filename,
      title: titleDesc,
      description: titleDesc,
    });

    return json({
      success: true,
      sql,
      filename,
      pr: {
        url: result.prUrl,
        number: result.prNumber,
        branch: result.branch,
      },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to create PR";
    return json({ error: message }, { status: 500 });
  }
}

export function loader() {
  return json(
    {
      endpoints: {
        "POST /api/schema-request": {
          description: "Submit a schema change request to generate a migration PR",
          types: VALID_TYPES,
          examples: {
            add_column: {
              type: "add_column",
              table: "prompt_options",
              column: "description",
              dataType: "text",
              nullable: true,
            },
            add_table: {
              type: "add_table",
              table: "prompt_tags",
              columns: [
                { name: "id", dataType: "serial", primaryKey: true },
                { name: "label", dataType: "text", nullable: false },
              ],
            },
            add_index: {
              type: "add_index",
              table: "prompt_options",
              columns: ["category_id", "sort_order"],
            },
          },
        },
      },
    },
    { status: 200 }
  );
}
