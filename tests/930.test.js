import { numSubarraysWithSum } from "../src/930.js";
import { arrToStr } from "./util.js";

describe("930. Binary Subarrays With Sum", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numSubarraysWithSum(input);
      expect(result).toBe(expected);
    });
  });
});
