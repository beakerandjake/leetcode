import { oddEvenList } from "../../src/leetcode/328.js";
import { arrToStr } from "../util.js";

describe("328. Odd Even Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = oddEvenList(input);
      expect(result).toBe(expected);
    });
  });
});
