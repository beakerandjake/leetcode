import { integerBreak } from "../src/343.js";
import { arrToStr } from "./util.js";

describe("343. Integer Break", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = integerBreak(input);
      expect(result).toBe(expected);
    });
  });
});
