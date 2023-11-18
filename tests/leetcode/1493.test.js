import { longestSubarray } from "../../src/leetcode/1493.js";
import { arrToStr } from "../util.js";

describe("1493. Longest Subarray of 1's After Deleting One Element", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = longestSubarray(input);
      expect(result).toBe(expected);
    });
  });
});
