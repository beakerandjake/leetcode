import { containsDuplicate } from "../../src/leetcode/217.js";
import { arrToStr } from "../util.js";

describe("217. Contains Duplicate", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = containsDuplicate(input);
      expect(result).toBe(expected);
    });
  });
});
