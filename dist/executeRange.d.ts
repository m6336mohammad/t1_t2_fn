// t1_t2_fn.d.ts
declare module 't1_t2_fn' {
    /**
     * Executes a provided function at intervals of `everySecond` seconds, 
     * starting at `from` and stopping at `to`.
     * 
     * @param from - The starting point in seconds.
     * @param to - The ending point in seconds.
     * @param everySecond - The interval at which to execute the function, in seconds.
     * @param fun - The function to execute.
     */
    export function executeRange(from: number, to: number, everySecond: number, fun: () => void): void;
}
