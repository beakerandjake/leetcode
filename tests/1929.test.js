import { getConcatenation } from "../src/1929.js";
import { arrToStr } from "./util.js";

describe("1929. Concatenation of Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = getConcatenation(input);
      expect(result).toBe(expected);
    });
  });
});
