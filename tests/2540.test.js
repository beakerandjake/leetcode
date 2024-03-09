import { getCommon } from "../src/2540.js";
import { arrToStr } from "./util.js";

describe("2540. Minimum Common Value", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = getCommon(input);
      expect(result).toBe(expected);
    });
  });
});
