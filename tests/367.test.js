import { isPerfectSquare } from "../src/367.js";
import { arrToStr } from "./util.js";

describe("367. Valid Perfect Square", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPerfectSquare(input);
      expect(result).toBe(expected);
    });
  });
});
