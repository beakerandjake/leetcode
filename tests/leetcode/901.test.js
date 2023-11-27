import { StockSpanner } from "../../src/leetcode/901.js";
import { arrToStr } from "../util.js";

describe("901. Online Stock Span", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = StockSpanner(input);
      expect(result).toBe(expected);
    });
  });
});
