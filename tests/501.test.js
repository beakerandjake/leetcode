import { findMode } from "../src/501.js";
import { arrToStr } from "./util.js";

describe("501. Find Mode in Binary Search Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findMode(input);
      expect(result).toBe(expected);
    });
  });
});
