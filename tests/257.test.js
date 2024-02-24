import { binaryTreePaths } from "../src/257.js";
import { arrToStr } from "./util.js";

describe("257. Binary Tree Paths", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = binaryTreePaths(input);
      expect(result).toBe(expected);
    });
  });
});
