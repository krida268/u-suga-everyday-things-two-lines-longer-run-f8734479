// Everyday Things, Two Lines, Longer Run
// Writes a two-line explanation of a toaster for a 10-year-old:
// line 1 explains it with one vivid analogy, line 2 says honestly
// what the analogy maps and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "A toaster is a little metal cage that holds bread still while tiny suns inside tan it brown on both sides.\n" +
  "It maps how heat browns bread from both sides at once, but leaves out that the 'suns' are just glowing wires, and bread doesn't get a tan \u2014 it dries out and burns.";

const outDir = process.argv[2] ?? "/output";
const chars = [...entry].length;
if (chars < 1 || chars > 400 || entry.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1-400 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${[...entry].length} characters to ${join(outDir, "entry.txt")}`);
