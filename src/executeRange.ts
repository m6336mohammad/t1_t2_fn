// executeRange.ts
export const executeRange = (t1: number, t2: number, everySecond: number, fun: () => void): void => {
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

// Example function to be executed
export const myPrint = (): void => {
    for (let g = 0; g < 5; g++) {
        console.log("...print Nodejs...");
    }
    console.log("....End....");
};
