import { longestValidParentheses } from "../src/32.js";
import { generateTestName } from "./util.js";

describe("32. Longest Valid Parentheses", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(longestValidParentheses, ...args), () => {
      const result = longestValidParentheses(input);
      expect(result).toBe(expected);
    });
  });
});
