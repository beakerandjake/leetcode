import { setZeroes } from "../../src/leetcode/73.js";
import { arrToStr } from "../util.js";

describe("73. Set Matrix Zeroes", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = setZeroes(input);
      expect(result).toBe(expected);
    });
  });
});
