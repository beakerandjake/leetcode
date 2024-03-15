import { findGCD } from "../src/1979.js";
import { arrToStr } from "./util.js";

describe("1979. Find Greatest Common Divisor of Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findGCD(input);
      expect(result).toBe(expected);
    });
  });
});
