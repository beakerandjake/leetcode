import { carPooling } from "../src/1094.js";
import { arrToStr } from "./util.js";

describe("1094. Car Pooling", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = carPooling(input);
      expect(result).toBe(expected);
    });
  });
});
