import { sortedSquares } from "../src/977.js";
import { arrToStr } from "./util.js";

describe("977. Squares of a Sorted Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = sortedSquares(input);
      expect(result).toBe(expected);
    });
  });
});
