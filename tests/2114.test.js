import { mostWordsFound } from "../src/2114.js";
import { arrToStr } from "./util.js";

describe("2114. Maximum Number of Words Found in Sentences", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = mostWordsFound(input);
      expect(result).toBe(expected);
    });
  });
});
