import { maxFrequencyElements } from "../src/3005.js";
import { arrToStr } from "./util.js";

describe("3005. Count Elements With Maximum Frequency", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maxFrequencyElements(input);
      expect(result).toBe(expected);
    });
  });
});
