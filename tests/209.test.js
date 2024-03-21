import { minSubArrayLen } from "../src/209.js";
import { generateTestName } from "./util.js";

describe("209. Minimum Size Subarray Sum", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(minSubArrayLen, ...args), () => {
      const result = minSubArrayLen(input);
      expect(result).toBe(expected);
    });
  });
});
