import { reverseWords } from "../src/557.js";
import { arrToStr } from "./util.js";

describe("557. Reverse Words in a String III", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = reverseWords(input);
      expect(result).toBe(expected);
    });
  });
});
