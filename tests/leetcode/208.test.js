import { Trie } from "../../src/leetcode/208.js";
import { arrToStr } from "../util.js";

describe("208. Implement Trie (Prefix Tree)", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = Trie(input);
      expect(result).toBe(expected);
    });
  });
});
