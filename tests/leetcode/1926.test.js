import { nearestExit } from "../../src/leetcode/1926.js";
import { arrToStr } from "../util.js";

describe("1926. Nearest Exit from Entrance in Maze", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = nearestExit(input);
      expect(result).toBe(expected);
    });
  });
});
