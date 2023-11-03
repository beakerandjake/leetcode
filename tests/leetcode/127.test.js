import { ladderLength } from "../../src/leetcode/127.js";
import { arrToStr } from "../util.js";

describe("127. Word Ladder", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = ladderLength(input);
      expect(result).toBe(expected);
    });
  });
});
