import { maximumOddBinaryNumber } from "../src/2864.js";
import { arrToStr } from "./util.js";

describe("2864. Maximum Odd Binary Number", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maximumOddBinaryNumber(input);
      expect(result).toBe(expected);
    });
  });
});
