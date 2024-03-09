import { vowelStrings } from "../src/2586.js";
import { arrToStr } from "./util.js";

describe("2586. Count the Number of Vowel Strings in Range", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = vowelStrings(input);
      expect(result).toBe(expected);
    });
  });
});
