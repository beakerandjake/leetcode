import { sum } from "../src/2235.js";
import { arrToStr } from "./util.js";

describe("2235. Add Two Integers", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = sum(input);
      expect(result).toBe(expected);
    });
  });
});
