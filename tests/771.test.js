import { numJewelsInStones } from "../src/771.js";
import { arrToStr } from "./util.js";

describe("771. Jewels and Stones", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numJewelsInStones(input);
      expect(result).toBe(expected);
    });
  });
});
