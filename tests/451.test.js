import { frequencySort } from "../src/451.js";
import { arrToStr } from "./util.js";

describe("451. Sort Characters By Frequency", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = frequencySort(input);
      expect(result).toBe(expected);
    });
  });
});
