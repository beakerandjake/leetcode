import { calcEquation } from "../../src/leetcode/399.js";
import { arrToStr } from "../util.js";

describe("399. Evaluate Division", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = calcEquation(input);
      expect(result).toBe(expected);
    });
  });
});
