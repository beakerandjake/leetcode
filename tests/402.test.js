import { removeKdigits } from "../src/402.js";
import { arrToStr } from "./util.js";

describe("402. Remove K Digits", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = removeKdigits(input);
      expect(result).toBe(expected);
    });
  });
});
