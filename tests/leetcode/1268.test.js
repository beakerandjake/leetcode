import { suggestedProducts } from "../../src/leetcode/1268.js";
import { arrToStr } from "../util.js";

describe("1268. Search Suggestions System", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = suggestedProducts(input);
      expect(result).toBe(expected);
    });
  });
});
