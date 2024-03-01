import { defangIPaddr } from "../src/1108.js";
import { arrToStr } from "./util.js";

describe("1108. Defanging an IP Address", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = defangIPaddr(input);
      expect(result).toBe(expected);
    });
  });
});
