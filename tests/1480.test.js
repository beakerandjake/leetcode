import { runningSum } from "../src/1480.js";
import { generateTestName } from "./util.js";

describe("1480. Running Sum of 1d Array", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(runningSum, ...args), () => {
      const result = runningSum(input);
      expect(result).toBe(expected);
    });
  });
});
