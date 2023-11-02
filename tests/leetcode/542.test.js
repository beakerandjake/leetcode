import { updateMatrix } from "../../src/leetcode/542.js";
import { arrToStr } from "../util.js";

describe("542. 01 Matrix", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = updateMatrix(input);
      expect(result).toBe(expected);
    });
  });
});
