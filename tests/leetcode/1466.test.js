import { minReorder } from "../../src/leetcode/1466.js";
import { arrToStr } from "../util.js";

describe("1466. Reorder Routes to Make All Paths Lead to the City Zero", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minReorder(input);
      expect(result).toBe(expected);
    });
  });
});
