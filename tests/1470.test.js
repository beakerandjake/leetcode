import { shuffle } from "../src/1470.js";
import { arrToStr } from "./util.js";

describe("1470. Shuffle the Array", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = shuffle(input);
      expect(result).toBe(expected);
    });
  });
});
