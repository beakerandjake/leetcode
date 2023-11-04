import { snakesAndLadders } from "../../src/leetcode/909.js";
import { arrToStr } from "../util.js";

describe("909. Snakes and Ladders", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = snakesAndLadders(input);
      expect(result).toBe(expected);
    });
  });
});
