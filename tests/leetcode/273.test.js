import { numberToWords } from "../../src/leetcode/273.js";
import { arrToStr } from "../util.js";

describe("273. Integer to English Words", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numberToWords(input);
      expect(result).toBe(expected);
    });
  });
});
