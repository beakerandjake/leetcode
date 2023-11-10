import { allPathsSourceTarget } from "../../src/leetcode/797.js";
import { arrToStr } from "../util.js";

describe("797. All Paths From Source to Target", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = allPathsSourceTarget(input);
      expect(result).toBe(expected);
    });
  });
});
