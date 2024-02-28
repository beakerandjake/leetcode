import { rangeSumBST } from "../src/938.js";
import { arrToStr } from "./util.js";

describe("938. Range Sum of BST", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = rangeSumBST(input);
      expect(result).toBe(expected);
    });
  });
});
