// The World Today — 25 November 2026 (Node 22, standard library only).
// The front page is pre-rendered into entry.png beside this file (built from
// page.html in headless Chromium at build time); this program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const size = statSync(source).size;
if (size > 1048576) throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate limit`);
const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(source, target);
console.log(`copied entry.png (${size} bytes) to ${target}`);
