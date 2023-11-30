import { SmallestInfiniteSet } from "../../src/leetcode/2336.js";
import { arrToStr } from "../util.js";

describe("2336. Smallest Number in Infinite Set", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = SmallestInfiniteSet(input);
      expect(result).toBe(expected);
    });
  });
});
