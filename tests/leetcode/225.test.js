import { MyStack } from "../../src/leetcode/225.js";
import { arrToStr } from "../util.js";

describe("225. Implement Stack using Queues", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = MyStack(input);
      expect(result).toBe(expected);
    });
  });
});
