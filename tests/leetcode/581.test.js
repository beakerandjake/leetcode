import { findUnsortedSubarray } from "../../src/leetcode/581.js";
import { arrToStr } from "../util.js";

describe("581. Shortest Unsorted Continuous Subarray", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findUnsortedSubarray(input);
      expect(result).toBe(expected);
    });
  });
});
