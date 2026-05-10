import { json } from "@remix-run/node";
import { loadPrompts } from "~/lib/prompt-loader.server";

export async function loader() {
  try {
    const categories = await loadPrompts();
    return json({ success: true, data: categories });
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Failed to load prompt categories";
    return json({ success: false, error: message }, { status: 500 });
  }
}
