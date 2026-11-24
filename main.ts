// News-image entry for 24 November 2026 (Node 22, standard library only).
// The entry image is the entry.png beside this file: a newspaper front page
// drawn for this bounty, summing up Tuesday 24 November 2026 in six stories
// (the ICJ finding Myanmar guilty of genocide, NATO warning over a Russian
// space threat, a US drone helping catch El Chapo Isidro, China sentencing
// an official to death for spying, the Nepal earthquake, and Solomon Islands
// dropping its China security pact). This program copies it, byte for byte,
// to /output/entry.png, so two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// No network, no randomness, no timestamps: the copy is deterministic,
// and the image is 1024 by 1024 pixels and well under the 1 MiB cap.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
