import { deleteMiddle } from "../../src/leetcode/2095.js";
import { arrToStr } from "../util.js";

describe("2095. Delete the Middle Node of a Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = deleteMiddle(input);
      expect(result).toBe(expected);
    });
  });
});
