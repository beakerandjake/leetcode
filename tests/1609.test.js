import { isEvenOddTree } from "../src/1609.js";
import { arrToStr } from "./util.js";

describe("1609. Even Odd Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isEvenOddTree(input);
      expect(result).toBe(expected);
    });
  });
});
