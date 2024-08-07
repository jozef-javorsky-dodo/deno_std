// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

import { createExtractor, type Parser } from "./_create_extractor.ts";
import type { Extract } from "./types.ts";

export type { Extract };

const _extractor = createExtractor({
  ["json"]: JSON.parse as Parser,
});

/**
 * Extracts and parses {@link https://www.json.org/ | JSON } from the metadata
 * of front matter content.
 *
 * @example Extract JSON front matter
 * ```ts
 * import { extract } from "@std/front-matter/json";
 * import { assertEquals } from "@std/assert";
 *
 * const output = `---json
 * { "title": "Three dashes marks the spot" }
 * ---
 * Hello, world!`;
 * const result = extract(output);
 *
 * assertEquals(result, {
 *   frontMatter: '{ "title": "Three dashes marks the spot" }',
 *   body: "Hello, world!",
 *   attrs: { title: "Three dashes marks the spot" },
 * });
 * ```
 *
 * @typeParam T The type of the parsed front matter.
 * @param text The text to extract JSON front matter from.
 * @returns The extracted JSON front matter and body content.
 */
export function extract<T>(text: string): Extract<T> {
  return _extractor(text);
}
