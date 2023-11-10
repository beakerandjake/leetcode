import { validPath } from "../../src/leetcode/1971.js";
import { arrToStr } from "../util.js";

describe("1971. Find if Path Exists in Graph", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = validPath(input);
      expect(result).toBe(expected);
    });
  });
});
