import { addDigits } from "../src/258.js";
import { arrToStr } from "./util.js";

describe("258. Add Digits", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = addDigits(input);
      expect(result).toBe(expected);
    });
  });
});
