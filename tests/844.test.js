import { backspaceCompare } from "../src/844.js";
import { generateTestName } from "./util.js";

describe("844. Backspace String Compare", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(backspaceCompare, ...args), () => {
      const result = backspaceCompare(input);
      expect(result).toBe(expected);
    });
  });
});
