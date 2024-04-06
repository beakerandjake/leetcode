import { maxDepth } from "../src/1614.js";
import { generateTestName } from "./util.js";

describe("1614. Maximum Nesting Depth of the Parentheses", () => {
  [
    ["(1+(2*3)+((8)/4))+1", 3],
    ["(1)+((2))+(((3)))", 3],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(maxDepth, ...args), () => {
      const result = maxDepth(s);
      expect(result).toBe(expected);
    });
  });
});
