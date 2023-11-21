import { pairSum } from "../../src/leetcode/2130.js";
import { arrToStr } from "../util.js";

describe("2130. Maximum Twin Sum of a Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = pairSum(input);
      expect(result).toBe(expected);
    });
  });
});
