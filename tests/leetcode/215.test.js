import { findKthLargest } from "../../src/leetcode/215.js";
import { arrToStr } from "../util.js";

describe("215. Kth Largest Element in an Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findKthLargest(input);
      expect(result).toBe(expected);
    });
  });
});
