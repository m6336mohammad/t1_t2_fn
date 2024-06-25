// executeRange.ts
export const executeRange = (t1: number, t2: number, everySecond: number, fun: () => void): void => {
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
    let g = 0;
    while (g < 5) {
        console.log("...print Nodejs...");
        g += 1;
    }
    console.log("....End....");
};
