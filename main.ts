// One Letter for Your Day — make.fun entry
//
// The letter is X. Behind it sits the word "eXhausted": a day so draining
// you are exhausted. X is the sharp, unobvious initial for the "ex-" word —
// vivid (a day wrung dry), funny (the letter itself looks wiped out),
// and true (everyone has had that day). Not the obvious A-amazing or
// F-Friday or Z-zero-sleep pick; X earns its place.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "X";
const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LETTER, "utf8");

// Read-back verification: the gate requires exactly one UTF-8 character,
// a letter A-Z, not whitespace. Fail loudly instead of passing a bad entry.
const written = readFileSync(OUTPUT, "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(
    `entry.txt must be exactly one A-Z letter, got ${JSON.stringify(written)}`,
  );
}
