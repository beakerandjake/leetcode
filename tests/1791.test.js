import { findCenter } from "../src/1791.js";
import { arrToStr } from "./util.js";

describe("1791. Find Center of Star Graph", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findCenter(input);
      expect(result).toBe(expected);
    });
  });
});
