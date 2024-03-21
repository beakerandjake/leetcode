import { transpose } from "../src/867.js";
import { generateTestName } from "./util.js";

describe("867. Transpose Matrix", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(transpose, ...args), () => {
      const result = transpose(input);
      expect(result).toBe(expected);
    });
  });
});
