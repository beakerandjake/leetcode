import { reverse } from "../src/7.js";
import { arrToStr } from "./util.js";

describe("7. Reverse Integer", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = reverse(input);
      expect(result).toBe(expected);
    });
  });
});
