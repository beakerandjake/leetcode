import { findBottomLeftValue } from "../src/513.js";
import { arrToStr } from "./util.js";

describe("513. Find Bottom Left Tree Value", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findBottomLeftValue(input);
      expect(result).toBe(expected);
    });
  });
});
