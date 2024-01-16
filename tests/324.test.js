import { wiggleSort } from "../../src/324.js";
import { arrToStr } from "../util.js";

describe("324. Wiggle Sort II", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = wiggleSort(input);
      expect(result).toBe(expected);
    });
  });
});
