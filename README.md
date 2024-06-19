# t1_t2_fn
This package is a function with 3 arguments t1, t2, fun(), execution of argument 3 for t1 to t2

# Test Resalt
```bash
npm test
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

whene everySecond = 2


```bash
Test Print
Test Print
Test Print
Test Print
Test Print

```
whene everySecond = 5

```bash
Test Print
Test Print

```