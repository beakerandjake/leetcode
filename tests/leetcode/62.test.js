import { uniquePaths } from "../../src/leetcode/62.js";
import { arrToStr } from "../util.js";

describe("62. Unique Paths", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = uniquePaths(input);
      expect(result).toBe(expected);
    });
  });
});
