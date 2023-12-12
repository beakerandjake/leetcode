import { tictactoe } from "../../src/leetcode/1275.js";
import { arrToStr } from "../util.js";

describe("1275. Find Winner on a Tic Tac Toe Game", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = tictactoe(input);
      expect(result).toBe(expected);
    });
  });
});
