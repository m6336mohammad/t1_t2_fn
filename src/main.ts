// Example Use:

import { executeRange, myPrint } from './executeRange.js';

const stepOne: number = 1
const stepTwo: number = 10
const everySecond: number = 2

executeRange(stepOne, stepTwo, everySecond, () => {
    myPrint();
});
