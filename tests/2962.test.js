import { countSubarrays } from "../src/2962.js";
import { generateTestName } from "./util.js";

describe("2962. Count Subarrays Where Max Element Appears at Least K Times", () => {
  [
    [[1, 3, 2, 3, 3], 2, 6],
    [[1, 4, 2, 1], 3, 0],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(countSubarrays, ...args), () => {
      const result = countSubarrays(nums, k);
      expect(result).toBe(expected);
    });
  });
});
