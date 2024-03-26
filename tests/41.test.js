import { firstMissingPositive } from "../src/41.js";
import { generateTestName } from "./util.js";

describe("41. First Missing Positive", () => {
  [
    [[1, 2, 0], 3],
    [[3, 4, -1, 1], 2],
    [[7, 8, 9, 11, 12], 1],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(firstMissingPositive, ...args), () => {
      const result = firstMissingPositive(nums);
      expect(result).toBe(expected);
    });
  });
});
