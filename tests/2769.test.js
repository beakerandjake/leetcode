import { theMaximumAchievableX } from "../src/2769.js";
import { arrToStr } from "./util.js";

describe("2769. Find the Maximum Achievable Number", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = theMaximumAchievableX(input);
      expect(result).toBe(expected);
    });
  });
});
