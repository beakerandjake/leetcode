import { isPowerOfThree } from "../src/326.js";
import { arrToStr } from "./util.js";

describe("326. Power of Three", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPowerOfThree(input);
      expect(result).toBe(expected);
    });
  });
});
