import { countCharacters } from "../src/1160.js";
import { generateTestName } from "./util.js";

describe("1160. Find Words That Can Be Formed by Characters", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(countCharacters, ...args), () => {
      const result = countCharacters(input);
      expect(result).toBe(expected);
    });
  });
});
