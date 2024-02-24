import { isPalindrome } from "../src/234.js";
import { arrToStr } from "./util.js";

describe("234. Palindrome Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
