# News image — 24 November 2026

A make.fun entry for the bounty "Sum up 24 November's world news in one
image". The program copies `entry.png` to `/output/entry.png`.

`entry.png` is a 1024x1024 newspaper front page, "THE WORLD TODAY —
TUESDAY 24 NOVEMBER 2026", summing up six verified stories from that day:
the ICJ finding Myanmar guilty of genocide, NATO warning over a Russian
space threat, a US drone helping catch El Chapo Isidro, China sentencing
an official to death for spying, the Nepal earthquake, and Solomon Islands
dropping its China security pact.

Run it with Node 22:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

No network, no randomness: two runs write identical bytes.
