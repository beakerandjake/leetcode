import { removeStars } from "../../src/leetcode/2390.js";
import { arrToStr } from "../util.js";

describe("2390. Removing Stars From a String", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = removeStars(input);
      expect(result).toBe(expected);
    });
  });
});
