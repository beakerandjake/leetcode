import { maxProfit } from "../../src/leetcode/714.js";
import { arrToStr } from "../util.js";

describe("714. Best Time to Buy and Sell Stock with Transaction Fee", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maxProfit(input);
      expect(result).toBe(expected);
    });
  });
});
