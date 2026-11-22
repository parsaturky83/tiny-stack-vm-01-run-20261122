# tiny-stack-vm

A tiny stack virtual machine for the [make.fun](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) bounty "Build a tiny stack virtual machine, 22 November 2026".

`main.ts` (Node 22, no dependencies) runs one whole set of 40 instances:
each instance's `program.bin` on its `input.bin`, writing the exact bytes
the program outputs to `/output/<id>/stdout.bin` and its exit code to
`/output/<id>/exit.txt`.

It implements the kit's ISA faithfully (`generator/subject/ISA.md`, the
reference `vm.mjs` is the rule): 32-bit wrapping arithmetic, a 256-value
stack, a 64-deep call stack, 256 words of memory, input and output, and all
ten traps with their own exit codes, plus the 1,000,000-step and
65,536-byte output limits — including the hard rules the house baseline
skips (exact `MUL`, unsigned `DIVU`/`MODU`/`LTU`, signed division and
remainder edge cases, shift masking, `PUSH8` sign extension, and every
trap's code). Deterministic: no clock, no randomness, no network.

## Test

```sh
mkdir -p out && MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```
