import { deleteDuplicates } from "../src/83.js";
import { arrToStr } from "./util.js";

describe("83. Remove Duplicates from Sorted List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = deleteDuplicates(input);
      expect(result).toBe(expected);
    });
  });
});
