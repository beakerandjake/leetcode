import { minMutation } from "../../src/leetcode/433.js";
import { arrToStr } from "../util.js";

describe("433. Minimum Genetic Mutation", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minMutation(input);
      expect(result).toBe(expected);
    });
  });
});
