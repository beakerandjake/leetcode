import { findErrorNums } from "../src/645.js";
import { generateTestName } from "./util.js";

describe("645. Set Mismatch", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(findErrorNums, ...args), () => {
      const result = findErrorNums(input);
      expect(result).toBe(expected);
    });
  });
});
