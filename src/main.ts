// Example Use:

import { executeRange, myPrint } from './executeRange.js';

const from: number = 1
const to: number = 10
const everySecond: number = 2

executeRange(from, to, everySecond, () => {
    myPrint();
});
