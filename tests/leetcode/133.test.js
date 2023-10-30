import { cloneGraph } from "../../src/leetcode/133.js";
import { arrToStr } from "../util.js";

describe("133. Clone Graph", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = cloneGraph(input);
      expect(result).toBe(expected);
    });
  });
});
