import { rearrangeArray } from "../src/2149.js";
import { arrToStr } from "./util.js";

describe("2149. Rearrange Array Elements by Sign", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = rearrangeArray(input);
      expect(result).toBe(expected);
    });
  });
});
