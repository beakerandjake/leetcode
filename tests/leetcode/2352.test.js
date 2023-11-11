import { equalPairs } from "../../src/leetcode/2352.js";
import { arrToStr } from "../util.js";

describe("2352. Equal Row and Column Pairs", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = equalPairs(input);
      expect(result).toBe(expected);
    });
  });
});
