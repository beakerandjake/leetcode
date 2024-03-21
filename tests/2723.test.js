import { addTwoPromises } from "../src/2723.js";
import { arrToStr } from "./util.js";

describe("2723. Add Two Promises", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = addTwoPromises(input);
      expect(result).toBe(expected);
    });
  });
});
