"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPrint = exports.executeRange = void 0;
// executeRange.ts
const executeRange = (t1, t2, everySecond, fun) => {
    // Ensure valid input
    if (everySecond <= 0) {
        throw new Error("everySecond must be a positive number");
    }
    if (t1 > t2) {
        throw new Error("t1 must be less than or equal to t2");
    }
    let current = t1;
    function executeAndScheduleNext() {
        if (current <= t2) {
            fun();
            current += everySecond;
            setTimeout(executeAndScheduleNext, everySecond * 1000);
        }
    }
    executeAndScheduleNext();
};
exports.executeRange = executeRange;
// Example function to be executed
const myPrint = () => {
    for (let g = 0; g < 5; g++) {
        console.log("...print Nodejs...");
    }
    console.log("....End....");
};
exports.myPrint = myPrint;
