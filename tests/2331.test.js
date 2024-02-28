import { evaluateTree } from "../src/2331.js";
import { arrToStr } from "./util.js";

describe("2331. Evaluate Boolean Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = evaluateTree(input);
      expect(result).toBe(expected);
    });
  });
});
