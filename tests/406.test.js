import { reconstructQueue } from "../src/406.js";
import { arrToStr } from "./util.js";

describe("406. Queue Reconstruction by Height", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = reconstructQueue(input);
      expect(result).toBe(expected);
    });
  });
});
