import { mergeInBetween } from "../src/1669.js";
import { arrToStr } from "./util.js";

describe("1669. Merge In Between Linked Lists", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = mergeInBetween(input);
      expect(result).toBe(expected);
    });
  });
});
