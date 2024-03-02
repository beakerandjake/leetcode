import { minPartitions } from "../src/1689.js";
import { arrToStr } from "./util.js";

describe("1689. Partitioning Into Minimum Number Of Deci-Binary Numbers", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minPartitions(input);
      expect(result).toBe(expected);
    });
  });
});
