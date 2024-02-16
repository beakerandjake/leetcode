import { findLeastNumOfUniqueInts } from "../src/1481.js";
import { arrToStr } from "./util.js";

describe("1481. Least Number of Unique Integers after K Removals", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findLeastNumOfUniqueInts(input);
      expect(result).toBe(expected);
    });
  });
});
