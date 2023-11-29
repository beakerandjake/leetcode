import { kSmallestPairs } from "../../src/leetcode/373.js";
import { arrToStr } from "../util.js";

describe("373. Find K Pairs with Smallest Sums", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = kSmallestPairs(input);
      expect(result).toBe(expected);
    });
  });
});
