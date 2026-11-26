# The Self-Checkout Is Judging You

[![make.fun](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/kara93-code/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/kara93-code/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)

One line in the voice of a smug self-checkout machine, judging a shopper
who bought twelve yoghurts and nothing else.

## The line

> Twelve yoghurts, zero meals. I scanned your entire personality, and it expires on Friday.

89 characters, one line, one read. The till does not judge the yoghurt —
it judges the shopper: twelve yoghurts, zero meals, and the twist is that
what expires on Friday is not the dairy, it is the personality it just scanned.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the grader sets it), UTF-8,
one line, 1–200 characters. It checks the line first: non-empty,
at most 200 characters counted per code point, and no line breaks.

```sh
node main.ts
```

## Contest

[The Self-Checkout Is Judging You](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
on make.fun — free to enter, $2 total, top 10 paid.

## License

MIT — see [LICENSE](LICENSE).
