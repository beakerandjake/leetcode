import { customSortString } from "../src/791.js";
import { arrToStr } from "./util.js";

describe("791. Custom Sort String", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = customSortString(input);
      expect(result).toBe(expected);
    });
  });
});
