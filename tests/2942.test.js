import { findWordsContaining } from "../src/2942.js";
import { arrToStr } from "./util.js";

describe("2942. Find Words Containing Character", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findWordsContaining(input);
      expect(result).toBe(expected);
    });
  });
});
