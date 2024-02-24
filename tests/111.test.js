import { minDepth } from "../src/111.js";
import { arrToStr } from "./util.js";

describe("111. Minimum Depth of Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minDepth(input);
      expect(result).toBe(expected);
    });
  });
});
