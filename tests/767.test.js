import { reorganizeString } from "../src/767.js";
import { generateTestName } from "./util.js";

describe("767. Reorganize String", () => {
  [
    ["aab", "aba"],
    ["aaab", ""],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(reorganizeString, ...args), () => {
      const result = reorganizeString(s);
      expect(result).toBe(expected);
    });
  });
});
