// main.ts
import { executeRange, myPrint } from './executeRange';

executeRange(1, 10, 2, () => {
    myPrint();
});
