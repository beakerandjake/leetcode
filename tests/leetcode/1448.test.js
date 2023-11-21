import { goodNodes } from "../../src/leetcode/1448.js";
import { arrToStr } from "../util.js";

describe("1448. Count Good Nodes in Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = goodNodes(input);
      expect(result).toBe(expected);
    });
  });
});
