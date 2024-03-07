import { findTheDifference } from "../src/389.js";
import { arrToStr } from "./util.js";

describe("389. Find the Difference", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findTheDifference(input);
      expect(result).toBe(expected);
    });
  });
});
