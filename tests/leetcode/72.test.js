import { minDistance } from "../../src/leetcode/72.js";
import { arrToStr } from "../util.js";

describe("72. Edit Distance", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minDistance(input);
      expect(result).toBe(expected);
    });
  });
});
