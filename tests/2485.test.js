import { pivotInteger } from "../src/2485.js";
import { arrToStr } from "./util.js";

describe("2485. Find the Pivot Integer", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = pivotInteger(input);
      expect(result).toBe(expected);
    });
  });
});
