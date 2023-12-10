import { checkInclusion } from "../../src/leetcode/567.js";
import { arrToStr } from "../util.js";

describe("567. Permutation in String", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = checkInclusion(input);
      expect(result).toBe(expected);
    });
  });
});
