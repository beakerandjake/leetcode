import { interpret } from "../src/1678.js";
import { arrToStr } from "./util.js";

describe("1678. Goal Parser Interpretation", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = interpret(input);
      expect(result).toBe(expected);
    });
  });
});
