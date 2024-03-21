import { intToRoman } from "../src/12.js";
import { generateTestName } from "./util.js";

describe("12. Integer to Roman", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(intToRoman, ...args), () => {
      const result = intToRoman(input);
      expect(result).toBe(expected);
    });
  });
});
