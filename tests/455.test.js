import { findContentChildren } from "../src/455.js";
import { generateTestName } from "./util.js";

describe("455. Assign Cookies", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(findContentChildren, ...args), () => {
      const result = findContentChildren(input);
      expect(result).toBe(expected);
    });
  });
});
