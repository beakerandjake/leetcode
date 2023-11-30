import { maxScore } from "../../src/leetcode/2542.js";
import { arrToStr } from "../util.js";

describe("2542. Maximum Subsequence Score", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maxScore(input);
      expect(result).toBe(expected);
    });
  });
});
