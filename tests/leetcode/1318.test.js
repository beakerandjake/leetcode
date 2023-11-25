import { minFlips } from "../../src/leetcode/1318.js";
import { arrToStr } from "../util.js";

describe("1318. Minimum Flips to Make a OR b Equal to c", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minFlips(input);
      expect(result).toBe(expected);
    });
  });
});
