import { findCircleNum } from "../../src/leetcode/547.js";
import { arrToStr } from "../util.js";

describe("547. Number of Provinces", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findCircleNum(input);
      expect(result).toBe(expected);
    });
  });
});
