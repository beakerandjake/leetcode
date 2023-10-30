import { openLock } from "../../src/leetcode/752.js";
import { arrToStr } from "../util.js";

describe("752. Open the Lock", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = openLock(input);
      expect(result).toBe(expected);
    });
  });
});
