import { MyCircularQueue } from "../../src/leetcode/622.js";
import { arrToStr } from "../util.js";

describe("622. Design Circular Queue", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = MyCircularQueue(input);
      expect(result).toBe(expected);
    });
  });
});
