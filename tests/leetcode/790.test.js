import { numTilings } from "../../src/leetcode/790.js";
import { arrToStr } from "../util.js";

describe("790. Domino and Tromino Tiling", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numTilings(input);
      expect(result).toBe(expected);
    });
  });
});
