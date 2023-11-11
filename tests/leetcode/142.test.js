import { detectCycle } from "../../src/leetcode/142.js";
import { arrToStr } from "../util.js";

describe("142. Linked List Cycle II", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = detectCycle(input);
      expect(result).toBe(expected);
    });
  });
});
