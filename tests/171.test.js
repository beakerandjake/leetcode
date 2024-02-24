import { titleToNumber } from "../src/171.js";
import { arrToStr } from "./util.js";

describe("171. Excel Sheet Column Number", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = titleToNumber(input);
      expect(result).toBe(expected);
    });
  });
});
