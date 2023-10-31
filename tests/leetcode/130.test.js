import { solve } from "../../src/leetcode/130.js";
import { arrToStr } from "../util.js";

describe("130. Surrounded Regions", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = solve(input);
      expect(result).toBe(expected);
    });
  });
});
