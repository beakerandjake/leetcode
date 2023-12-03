import { successfulPairs } from "../../src/leetcode/2300.js";
import { arrToStr } from "../util.js";

describe("2300. Successful Pairs of Spells and Potions", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = successfulPairs(input);
      expect(result).toBe(expected);
    });
  });
});
