import { findMaxLength } from "../../src/leetcode/525.js";
import { arrToStr } from "../util.js";

describe("525. Contiguous Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findMaxLength(input);
      expect(result).toBe(expected);
    });
  });
});
