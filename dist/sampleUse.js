"use strict";
// Example Use:
Object.defineProperty(exports, "__esModule", { value: true });
const t1_t2_fn_1 = require("./t1_t2_fn");
const from = 1;
const to = 10;
const everySecond = 2;
(0, t1_t2_fn_1.executeRange)(from, to, everySecond, () => {
    (0, t1_t2_fn_1.myPrint)(); // or console.log("..test..")
});
