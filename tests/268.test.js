import { missingNumber } from "../src/268.js";
import { arrToStr } from "./util.js";

describe("268. Missing Number", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = missingNumber(input);
      expect(result).toBe(expected);
    });
  });
});
