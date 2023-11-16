import { twoSum } from "../../src/leetcode/167.js";
import { arrToStr } from "../util.js";

describe("167. Two Sum II - Input Array Is Sorted", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = twoSum(input);
      expect(result).toBe(expected);
    });
  });
});
