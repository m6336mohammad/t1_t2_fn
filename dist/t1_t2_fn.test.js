"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/executeRange.test.ts
const t1_t2_fn_1 = require("./t1_t2_fn");
jest.useFakeTimers();
describe('executeRange', () => {
    let logSpy;
    beforeEach(() => {
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });
    afterEach(() => {
        jest.clearAllTimers();
        logSpy.mockRestore();
    });
    it('should execute the function at the correct intervals', () => {
        const mockFunction = jest.fn();
        (0, t1_t2_fn_1.executeRange)(0, 10, 2, mockFunction);
        // Fast-forward time by 10 seconds
        jest.advanceTimersByTime(10000);
        expect(mockFunction).toHaveBeenCalledTimes(6); // 0, 2, 4, 6, 8, 10
    });
    it('should execute the myPrint function correctly', () => {
        (0, t1_t2_fn_1.executeRange)(1, 10, 2, t1_t2_fn_1.myPrint);
        // Initial call at t=1
        jest.advanceTimersByTime(1000); // Fast-forward by 1 second
        // First myPrint call should happen at t=1
        expect(logSpy).toHaveBeenCalledTimes(6); // Prints "print Nodejs" 5 times and "....End...." once
        expect(logSpy).toHaveBeenNthCalledWith(1, "...print Nodejs...");
        expect(logSpy).toHaveBeenNthCalledWith(6, "....End....");
        // Fast-forward by another 2 seconds to t=3
        jest.advanceTimersByTime(2000);
        // Second myPrint call should happen at t=3
        expect(logSpy).toHaveBeenCalledTimes(12); // Prints "print Nodejs" 5 times and "....End...." once again
        expect(logSpy).toHaveBeenNthCalledWith(7, "...print Nodejs...");
        expect(logSpy).toHaveBeenNthCalledWith(12, "....End....");
    });
});
