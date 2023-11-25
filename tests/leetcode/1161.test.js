import { maxLevelSum } from "../../src/leetcode/1161.js";
import { arrToStr } from "../util.js";

describe("1161. Maximum Level Sum of a Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maxLevelSum(input);
      expect(result).toBe(expected);
    });
  });
});
