import { lengthOfLongestSubstring } from "../src/3.js";
import { arrToStr } from "./util.js";

describe("3. Longest Substring Without Repeating Characters", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });
  });
});
