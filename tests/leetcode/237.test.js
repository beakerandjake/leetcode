import { deleteNode } from "../../src/leetcode/237.js";
import { arrToStr } from "../util.js";

describe("237. Delete Node in a Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = deleteNode(input);
      expect(result).toBe(expected);
    });
  });
});
