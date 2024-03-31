import { countSubarrays } from "../src/2444.js";
import { generateTestName } from "./util.js";

describe("2444. Count Subarrays With Fixed Bounds", () => {
  [
    [[1, 3, 5, 2, 7, 5], 1, 5, 2],
    [[1, 1, 1, 1], 1, 1, 10],
  ].forEach((args) => {
    const [nums, minK, maxK, expected] = args;
    test(generateTestName(countSubarrays, ...args), () => {
      const result = countSubarrays(nums, minK, maxK);
      expect(result).toBe(expected);
    });
  });
});
