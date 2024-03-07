import { readBinaryWatch } from "../src/401.js";
import { arrToStr } from "./util.js";

describe("401. Binary Watch", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = readBinaryWatch(input);
      expect(result).toBe(expected);
    });
  });
});
