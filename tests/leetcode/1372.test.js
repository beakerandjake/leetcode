import { longestZigZag } from "../../src/leetcode/1372.js";
import { arrToStr } from "../util.js";

describe("1372. Longest ZigZag Path in a Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = longestZigZag(input);
      expect(result).toBe(expected);
    });
  });
});
