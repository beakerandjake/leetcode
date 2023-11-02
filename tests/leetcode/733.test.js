import { floodFill } from "../../src/leetcode/733.js";
import { arrToStr } from "../util.js";

describe("733. Flood Fill", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = floodFill(input);
      expect(result).toBe(expected);
    });
  });
});
