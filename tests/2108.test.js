import { firstPalindrome } from "../src/2108.js";
import { arrToStr } from "./util.js";

describe("2108. Find First Palindromic String in the Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = firstPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
