import { findTargetSumWays } from "../../src/leetcode/494.js";
import { arrToStr } from "../util.js";

describe("494. Target Sum", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findTargetSumWays(input);
      expect(result).toBe(expected);
    });
  });
});
