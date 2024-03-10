import { diameterOfBinaryTree } from "../src/543.js";
import { arrToStr } from "./util.js";

describe("543. Diameter of Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = diameterOfBinaryTree(input);
      expect(result).toBe(expected);
    });
  });
});
