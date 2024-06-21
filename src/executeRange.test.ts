// src/executeRange.test.ts
import { executeRange, myPrint } from './executeRange';

describe('executeRange', () => {
    let logSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.useFakeTimers();
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.clearAllTimers();
        logSpy.mockRestore();
        jest.useRealTimers();
    });

    it('should execute the function at the correct intervals', () => {
        const mockFunction = jest.fn();

        executeRange(0, 10, 2, mockFunction);

        // Fast-forward time by 10 seconds
        jest.advanceTimersByTime(10000);

        expect(mockFunction).toHaveBeenCalledTimes(6); // 0, 2, 4, 6, 8, 10
    });

    it('should execute the myPrint function correctly', () => {
        executeRange(0, 4, 2, myPrint);

        // Fast-forward time by 2 seconds and check
        jest.advanceTimersByTime(2000);
        expect(logSpy).toHaveBeenCalledTimes(6); // Each myPrint call prints "print Nodejs" 5 times and "....End...." once

        // Fast-forward time by another 2 seconds and check
        jest.advanceTimersByTime(2000);
        expect(logSpy).toHaveBeenCalledTimes(12); // Each myPrint call prints "print Nodejs" 5 times and "....End...." once, called 2 times

        // Verify the content of the logs
        expect(logSpy).toHaveBeenNthCalledWith(1, "print Nodejs");
        expect(logSpy).toHaveBeenNthCalledWith(6, "....End....");
        expect(logSpy).toHaveBeenNthCalledWith(7, "print Nodejs");
        expect(logSpy).toHaveBeenNthCalledWith(12, "....End....");
    });
});
