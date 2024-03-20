import { minRemoveToMakeValid } from "../src/1249.js";
import { arrToStr } from "./util.js";

describe("1249. Minimum Remove to Make Valid Parentheses", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minRemoveToMakeValid(input);
      expect(result).toBe(expected);
    });
  });
});
