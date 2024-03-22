import { maxScore } from "../src/1422.js";
import { generateTestName } from "./util.js";

describe("1422. Maximum Score After Splitting a String", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(maxScore, ...args), () => {
      const result = maxScore(input);
      expect(result).toBe(expected);
    });
  });
});
