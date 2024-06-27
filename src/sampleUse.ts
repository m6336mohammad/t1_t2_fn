// Example Use:

import { executeRange, myPrint } from './t1_t2_fn';

const from: number = 1
const to: number = 10
const everySecond: number = 2

executeRange(from, to, everySecond, () => {
    myPrint();// or console.log("..test..")
    
});
