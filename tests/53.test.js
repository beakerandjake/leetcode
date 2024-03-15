import { maxSubArray } from "../src/53.js";
import { arrToStr } from "./util.js";

describe("53. Maximum Subarray", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maxSubArray(input);
      expect(result).toBe(expected);
    });
  });
});
