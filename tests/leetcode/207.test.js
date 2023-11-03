import { canFinish } from "../../src/leetcode/207.js";
import { arrToStr } from "../util.js";

describe("207. Course Schedule", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = canFinish(input);
      expect(result).toBe(expected);
    });
  });
});
