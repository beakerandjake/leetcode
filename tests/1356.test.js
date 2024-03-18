import { sortByBits } from "../src/1356.js";
import { arrToStr } from "./util.js";

describe("1356. Sort Integers by The Number of 1 Bits", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = sortByBits(input);
      expect(result).toBe(expected);
    });
  });
});
