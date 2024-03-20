import { sequentialDigits } from "../src/1291.js";
import { arrToStr } from "./util.js";

describe("1291. Sequential Digits", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = sequentialDigits(input);
      expect(result).toBe(expected);
    });
  });
});
