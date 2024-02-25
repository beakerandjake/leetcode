import { NumArray } from "../src/303.js";
import { arrToStr } from "./util.js";

describe("303. Range Sum Query - Immutable", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = NumArray(input);
      expect(result).toBe(expected);
    });
  });
});
