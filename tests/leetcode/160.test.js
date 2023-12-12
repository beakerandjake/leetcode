import { getIntersectionNode } from "../../src/leetcode/160.js";
import { arrToStr } from "../util.js";

describe("160. Intersection of Two Linked Lists", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = getIntersectionNode(input);
      expect(result).toBe(expected);
    });
  });
});
