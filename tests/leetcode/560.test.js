import { subarraySum } from "../../src/leetcode/560.js";
import { arrToStr } from "../util.js";

describe("560. Subarray Sum Equals K", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = subarraySum(input);
      expect(result).toBe(expected);
    });
  });
});
