import { isCousins } from "../src/993.js";
import { arrToStr } from "./util.js";

describe("993. Cousins in Binary Tree", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isCousins(input);
      expect(result).toBe(expected);
    });
  });
});
