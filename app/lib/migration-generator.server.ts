export type SchemaChangeType =
  | "add_column"
  | "add_table"
  | "add_index"
  | "drop_column"
  | "rename_column";

export interface AddColumnRequest {
  type: "add_column";
  table: string;
  column: string;
  dataType: string;
  nullable?: boolean;
  defaultValue?: string;
}

export interface AddTableRequest {
  type: "add_table";
  table: string;
  columns: Array<{
    name: string;
    dataType: string;
    nullable?: boolean;
    defaultValue?: string;
    primaryKey?: boolean;
  }>;
}

export interface AddIndexRequest {
  type: "add_index";
  table: string;
  columns: string[];
  unique?: boolean;
}

export interface DropColumnRequest {
  type: "drop_column";
  table: string;
  column: string;
}

export interface RenameColumnRequest {
  type: "rename_column";
  table: string;
  oldName: string;
  newName: string;
}

export type SchemaChangeRequest =
  | AddColumnRequest
  | AddTableRequest
  | AddIndexRequest
  | DropColumnRequest
  | RenameColumnRequest;

const ALLOWED_TABLES = [
  "prompt_categories",
  "prompt_options",
] as const;

const ALLOWED_DATA_TYPES = [
  "text",
  "integer",
  "bigint",
  "boolean",
  "timestamptz",
  "jsonb",
  "uuid",
  "serial",
  "smallint",
  "numeric",
  "real",
  "double precision",
] as const;

const SNAKE_CASE_RE = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;

function escapeIdentifier(name: string): string {
  if (!SNAKE_CASE_RE.test(name)) {
    throw new Error(`Invalid identifier: "${name}" (snake_case required)`);
  }
  return `"${name.replace(/"/g, '""')}"`;
}

function validateTable(table: string): void {
  if (!(ALLOWED_TABLES as readonly string[]).includes(table)) {
    throw new Error(
      `Table "${table}" is not allowed. Allowed: ${ALLOWED_TABLES.join(", ")}`
    );
  }
}

function validateDataType(dataType: string): void {
  if (!(ALLOWED_DATA_TYPES as readonly string[]).includes(dataType.toLowerCase())) {
    throw new Error(
      `Data type "${dataType}" is not allowed. Allowed: ${ALLOWED_DATA_TYPES.join(", ")}`
    );
  }
}

function generateAddColumn(req: AddColumnRequest): string {
  validateTable(req.table);
  validateDataType(req.dataType);
  const col = escapeIdentifier(req.column);
  const nullable = req.nullable === false ? " NOT NULL" : "";
  const defaultVal =
    req.defaultValue !== undefined
      ? ` DEFAULT ${sanitizeDefault(req.defaultValue, req.dataType)}`
      : "";

  return `ALTER TABLE public.${escapeIdentifier(req.table)}\n  ADD COLUMN ${col} ${req.dataType.toUpperCase()}${defaultVal}${nullable};\n`;
}

function generateAddTable(req: AddTableRequest): string {
  if (!SNAKE_CASE_RE.test(req.table)) {
    throw new Error(`Invalid table name: "${req.table}"`);
  }
  if (req.columns.length === 0) {
    throw new Error("At least one column is required");
  }

  const colDefs = req.columns.map((c) => {
    validateDataType(c.dataType);
    const name = escapeIdentifier(c.name);
    const pk = c.primaryKey ? " PRIMARY KEY" : "";
    const nullable = c.nullable === false ? " NOT NULL" : "";
    const defaultVal =
      c.defaultValue !== undefined
        ? ` DEFAULT ${sanitizeDefault(c.defaultValue, c.dataType)}`
        : "";
    return `  ${name} ${c.dataType.toUpperCase()}${pk}${defaultVal}${nullable}`;
  });

  return `CREATE TABLE IF NOT EXISTS public.${escapeIdentifier(req.table)} (\n${colDefs.join(",\n")}\n);\n`;
}

function generateAddIndex(req: AddIndexRequest): string {
  validateTable(req.table);
  req.columns.forEach((c) => {
    if (!SNAKE_CASE_RE.test(c)) {
      throw new Error(`Invalid column name: "${c}"`);
    }
  });

  const unique = req.unique ? "UNIQUE " : "";
  const indexName = `idx_${req.table}_${req.columns.join("_")}`;
  const cols = req.columns.map(escapeIdentifier).join(", ");

  return `CREATE ${unique}INDEX IF NOT EXISTS ${escapeIdentifier(indexName)}\n  ON public.${escapeIdentifier(req.table)}(${cols});\n`;
}

function generateDropColumn(req: DropColumnRequest): string {
  validateTable(req.table);
  return `ALTER TABLE public.${escapeIdentifier(req.table)}\n  DROP COLUMN IF EXISTS ${escapeIdentifier(req.column)};\n`;
}

function generateRenameColumn(req: RenameColumnRequest): string {
  validateTable(req.table);
  return `ALTER TABLE public.${escapeIdentifier(req.table)}\n  RENAME COLUMN ${escapeIdentifier(req.oldName)} TO ${escapeIdentifier(req.newName)};\n`;
}

function sanitizeDefault(value: string, dataType: string): string {
  const numericTypes = ["integer", "bigint", "smallint", "numeric", "real", "double precision", "serial"];
  if (numericTypes.includes(dataType.toLowerCase())) {
    const num = Number(value);
    if (isNaN(num)) throw new Error(`Invalid numeric default: "${value}"`);
    return String(num);
  }
  if (dataType.toLowerCase() === "boolean") {
    if (value !== "true" && value !== "false") {
      throw new Error(`Invalid boolean default: "${value}"`);
    }
    return value;
  }
  if (value.toUpperCase() === "NOW()") return "NOW()";
  return `'${value.replace(/'/g, "''")}'`;
}

export function generateMigrationSQL(request: SchemaChangeRequest): string {
  const header = `-- Auto-generated migration\n-- Type: ${request.type}\n-- Generated at: ${new Date().toISOString()}\n\n`;

  let body: string;
  switch (request.type) {
    case "add_column":
      body = generateAddColumn(request);
      break;
    case "add_table":
      body = generateAddTable(request);
      break;
    case "add_index":
      body = generateAddIndex(request);
      break;
    case "drop_column":
      body = generateDropColumn(request);
      break;
    case "rename_column":
      body = generateRenameColumn(request);
      break;
    default:
      throw new Error(`Unknown change type: ${(request as SchemaChangeRequest).type}`);
  }

  return header + body;
}

export function generateMigrationFilename(request: SchemaChangeRequest): string {
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:T]/g, "")
    .slice(0, 14);

  let description: string;
  switch (request.type) {
    case "add_column":
      description = `add_${request.column}_to_${request.table}`;
      break;
    case "add_table":
      description = `create_${request.table}`;
      break;
    case "add_index":
      description = `add_index_${request.columns.join("_")}_on_${request.table}`;
      break;
    case "drop_column":
      description = `drop_${request.column}_from_${request.table}`;
      break;
    case "rename_column":
      description = `rename_${request.oldName}_to_${request.newName}_on_${request.table}`;
      break;
  }

  return `${timestamp}_${description}.sql`;
}
