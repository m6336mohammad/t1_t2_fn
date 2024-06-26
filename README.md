# t1_t2_fn

This package is a function with 3 arguments t1, t2, fun(), execution of argument 3 for t1 to t2

# Test Resalt

```bash
npm test

 PASS  src/executeRange.test.ts
  executeRange
    √ should execute the function at the correct intervals (8 ms)
    √ should execute the myPrint function correctly (3 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.53 s, estimated 3 s
Ran all test suites.
```

# Author

Mohammad Hadi
Email: mmm.6336@gmail.com

Donate address : `TS3ZnWGHfDnW7FcG8p6BYrWAis2nzX3gDG` //USDT TRC20

# Make TypeScript project:

```bash
npm install typescript ts-node @types/node
```

```bash
npx tsc --init
```

# Installation

# npm

```bash
npm install t1_t2_fn
```

# yarn

```bash
yarn add t1_t2_fn
```

# Example use:

```bash

import { executeRange, myPrint } from './executeRange.js';

const from: number = 1
const to: number = 10
const everySecond: number = 2

executeRange(from, to, everySecond, () => {
    console.log("Test print")
});

```

# out:

when everySecond variable = 2

```bash
Test Print
Test Print
Test Print
Test Print
Test Print

```

when everySecond variable = 5

```bash
Test Print
Test Print

```
