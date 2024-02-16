import { firstUniqChar } from "../src/387.js";
import { arrToStr } from "./util.js";

describe("387. First Unique Character in a String", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = firstUniqChar(input);
      expect(result).toBe(expected);
    });
  });
});
