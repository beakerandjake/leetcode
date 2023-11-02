import { decodeString } from "../../src/leetcode/394.js";
import { arrToStr } from "../util.js";

describe("394. Decode String", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = decodeString(input);
      expect(result).toBe(expected);
    });
  });
});
