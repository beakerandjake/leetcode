import { subarraysWithKDistinct } from "../src/992.js";
import { generateTestName } from "./util.js";

describe("992. Subarrays with K Different Integers", () => {
  [
    [[1, 2, 1, 2, 3], 2, 7],
    [[1, 2, 1, 3, 4], 3, 3],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(subarraysWithKDistinct, ...args), () => {
      const result = subarraysWithKDistinct(nums, k);
      expect(result).toBe(expected);
    });
  });
});
