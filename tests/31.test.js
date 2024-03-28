import { nextPermutation } from "../src/31.js";
import { generateTestName } from "./util.js";

describe("31. Next Permutation", () => {
  [
    [
      [1, 2, 3],
      [1, 3, 2],
    ],
    [
      [3, 2, 1],
      [1, 2, 3],
    ],
    [
      [1, 1, 5],
      [1, 5, 1],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(nextPermutation, ...args), () => {
      const result = nextPermutation(nums);
      expect(result).toEqual(expected);
    });
  });
});
