// The Self-Checkout Is Judging You — entry program.
//
// Writes one funny line in the voice of a smug self-checkout machine
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const LINE =
  "Twelve yoghurts, zero meals. I scanned your entire personality, and it expires on Friday.";

const LIMIT = 200;

function lengthInChars(value: string): number {
  return Array.from(value).length;
}

function checkedLine(raw: string): string {
  const line = raw.trim();
  const size = lengthInChars(line);
  if (size < 1 || size > LIMIT) {
    throw new Error(`entry must be 1-${LIMIT} characters, got ${size}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("entry must not contain control characters");
  }
  if (line !== line.replace(/\s+/g, " ")) {
    throw new Error("entry must use single spaces only");
  }
  return line;
}

const line = checkedLine(LINE);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const dest = resolve(dir, "entry.txt");
writeFileSync(dest, line + "\n", { encoding: "utf8", mode: 0o644 });
chmodSync(dest, 0o644);
console.log(`wrote ${lengthInChars(line)} characters to ${dest}`);
