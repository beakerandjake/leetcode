import { totalCost } from "../../src/leetcode/2462.js";
import { arrToStr } from "../util.js";

describe("2462. Total Cost to Hire K Workers", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = totalCost(input);
      expect(result).toBe(expected);
    });
  });
});
