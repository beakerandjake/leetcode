import { arrayStringsAreEqual } from "../src/1662.js";
import { arrToStr } from "./util.js";

describe("1662. Check If Two String Arrays are Equivalent", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = arrayStringsAreEqual(input);
      expect(result).toBe(expected);
    });
  });
});
