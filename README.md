# The World Today — 25 November 2026

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/firehorse20/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/firehorse20/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A newspaper front page summing up the world's news of **Wednesday, 25 November 2026** in one image: 35 stories across 12 regions.

## Leads

- **Two tankers hit mines in the Strait of Hormuz** — Iran says the tankers struck naval mines, exploded and caught fire; shipping will not return to normal until its demands are met.
- **Houthis hit Saudi refinery and Riyadh tower** — Ras Tanura refinery claimed hit; a Riyadh skyscraper strike injured 11.
- **Markets tumble as Dow tops 50,000** — Kospi −6.16%, Nikkei −2.78%; Nasdaq −1.5%, but the Dow closed at 50,018, a first.

Plus a UTC time bar, a schematic world map with 28 story dots, and 27 more stories: US tariffs on 14+ partners, Ukraine's strikes on two Rosneft refineries, Libya's vow of revenge for the Benghazi ship strike, Shenzhou-24 docking at Tiangong, the Australia–Solomon Islands pact, and stories from Europe, the Middle East, Africa, North America, Latin America and Asia-Pacific.

## How it is built

`page.html` is the front page (HTML/CSS, no network resources). It is rendered to `entry.png` (1024×1024 PNG) in headless Chromium at build time. `main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, refusing to run if the image exceeds the 1 MiB gate limit. Two runs produce byte-identical output.

Sources: Reuters, AP, BBC, NYT — stories verified 26 November 2026.
