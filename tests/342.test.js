import { isPowerOfFour } from "../src/342.js";
import { arrToStr } from "./util.js";

describe("342. Power of Four", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPowerOfFour(input);
      expect(result).toBe(expected);
    });
  });
});
