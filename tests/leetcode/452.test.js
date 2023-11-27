import { findMinArrowShots } from "../../src/leetcode/452.js";
import { arrToStr } from "../util.js";

describe("452. Minimum Number of Arrows to Burst Balloons", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findMinArrowShots(input);
      expect(result).toBe(expected);
    });
  });
});
