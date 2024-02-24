import { convertToTitle } from "../src/168.js";
import { arrToStr } from "./util.js";

describe("168. Excel Sheet Column Title", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = convertToTitle(input);
      expect(result).toBe(expected);
    });
  });
});
