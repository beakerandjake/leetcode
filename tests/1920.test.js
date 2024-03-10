import { buildArray } from "../src/1920.js";
import { arrToStr } from "./util.js";

describe("1920. Build Array from Permutation", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = buildArray(input);
      expect(result).toBe(expected);
    });
  });
});
