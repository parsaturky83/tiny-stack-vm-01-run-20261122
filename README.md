# tiny-stack-vm

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/parsaturky83/tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/parsaturky83/tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

A golfed stack VM for the [make.fun](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) bounty: `main.ts` (Node 22, no dependencies) answers all 40 instances in one run, writing each program's output bytes and exit code per the kit ISA — wrapping 32-bit arithmetic, 256-value stack, 64-deep call stack, all ten traps, deterministic.

Golfed to ~2.2 KB with a packed opcode table; verified 1,000,000 on the practice set and 0 mismatches against the reference VM over 5,171 fuzz programs.
