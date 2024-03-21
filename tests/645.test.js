import { findErrorNums } from "../src/645.js";
import { arrToStr } from "./util.js";

describe("645. Set Mismatch", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findErrorNums(input);
      expect(result).toBe(expected);
    });
  });
});
