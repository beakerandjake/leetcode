import { minimumLength } from "../src/1750.js";
import { arrToStr } from "./util.js";

describe("1750. Minimum Length of String After Deleting Similar Ends", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minimumLength(input);
      expect(result).toBe(expected);
    });
  });
});
