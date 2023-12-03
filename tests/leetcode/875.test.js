import { minEatingSpeed } from "../../src/leetcode/875.js";
import { arrToStr } from "../util.js";

describe("875. Koko Eating Bananas", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minEatingSpeed(input);
      expect(result).toBe(expected);
    });
  });
});
