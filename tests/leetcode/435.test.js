import { eraseOverlapIntervals } from "../../src/leetcode/435.js";
import { arrToStr } from "../util.js";

describe("435. Non-overlapping Intervals", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = eraseOverlapIntervals(input);
      expect(result).toBe(expected);
    });
  });
});
