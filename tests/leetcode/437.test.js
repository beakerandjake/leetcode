import { pathSum } from "../../src/leetcode/437.js";
import { arrToStr } from "../util.js";

describe("437. Path Sum III", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = pathSum(input);
      expect(result).toBe(expected);
    });
  });
});
