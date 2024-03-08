import { Solution } from "../src/528.js";
import { arrToStr } from "./util.js";

describe("528. Random Pick with Weight", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = Solution(input);
      expect(result).toBe(expected);
    });
  });
});
