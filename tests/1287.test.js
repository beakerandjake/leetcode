import { findSpecialInteger } from "../src/1287.js";
import { arrToStr } from "./util.js";

describe("1287. Element Appearing More Than 25% In Sorted Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findSpecialInteger(input);
      expect(result).toBe(expected);
    });
  });
});
