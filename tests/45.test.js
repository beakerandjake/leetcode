import { jump } from "../src/45.js";
import { generateTestName } from "./util.js";

describe("45. Jump Game II", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(jump, ...args), () => {
      const result = jump(input);
      expect(result).toBe(expected);
    });
  });
});
