import { MyQueue } from "../../src/leetcode/232.js";
import { arrToStr } from "../util.js";

describe("232. Implement Queue using Stacks", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = MyQueue(input);
      expect(result).toBe(expected);
    });
  });
});
