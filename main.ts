import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(dir, "out");
mkdirSync(outDir, { recursive: true });
// Copy the single-line excuse verbatim; the entry must stay exactly one line.
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
