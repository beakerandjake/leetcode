import { fizzBuzz } from "../src/412.js";
import { arrToStr } from "./util.js";

describe("412. Fizz Buzz", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = fizzBuzz(input);
      expect(result).toBe(expected);
    });
  });
});
