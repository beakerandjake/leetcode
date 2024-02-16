import { minWindow } from "../src/76.js";
import { arrToStr } from "./util.js";

describe("76. Minimum Window Substring", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minWindow(input);
      expect(result).toBe(expected);
    });
  });
});
