import { convertTemperature } from "../src/2469.js";
import { arrToStr } from "./util.js";

describe("2469. Convert the Temperature", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = convertTemperature(input);
      expect(result).toBe(expected);
    });
  });
});
