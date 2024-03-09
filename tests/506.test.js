import { findRelativeRanks } from "../src/506.js";
import { arrToStr } from "./util.js";

describe("506. Relative Ranks", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findRelativeRanks(input);
      expect(result).toBe(expected);
    });
  });
});
