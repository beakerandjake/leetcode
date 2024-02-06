import { search } from "../src/704.js";
import { arrToStr } from "./util.js";

describe("704. Binary Search", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = search(input);
      expect(result).toBe(expected);
    });
  });
});
