import { numIdenticalPairs } from "../src/1512.js";
import { arrToStr } from "./util.js";

describe("1512. Number of Good Pairs", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numIdenticalPairs(input);
      expect(result).toBe(expected);
    });
  });
});
