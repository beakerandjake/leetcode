import { numSpecial } from "../src/1582.js";
import { arrToStr } from "./util.js";

describe("1582. Special Positions in a Binary Matrix", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numSpecial(input);
      expect(result).toBe(expected);
    });
  });
});
