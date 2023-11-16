import { spiralOrder } from "../../src/leetcode/54.js";
import { arrToStr } from "../util.js";

describe("54. Spiral Matrix", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = spiralOrder(input);
      expect(result).toBe(expected);
    });
  });
});
