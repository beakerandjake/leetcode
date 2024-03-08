import { createHelloWorld } from "../src/2667.js";
import { arrToStr } from "./util.js";

describe("2667. Create Hello World Function", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = createHelloWorld(input);
      expect(result).toBe(expected);
    });
  });
});
