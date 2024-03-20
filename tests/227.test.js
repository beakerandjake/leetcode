import { calculate } from "../src/227.js";
import { arrToStr } from "./util.js";

describe("227. Basic Calculator II", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = calculate(input);
      expect(result).toBe(expected);
    });
  });
});
