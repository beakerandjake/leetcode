import { smallestStringWithSwaps } from "../../src/leetcode/1202.js";
import { arrToStr } from "../util.js";

describe("1202. Smallest String With Swaps", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = smallestStringWithSwaps(input);
      expect(result).toBe(expected);
    });
  });
});
