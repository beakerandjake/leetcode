import { leastInterval } from "../src/621.js";
import { arrToStr } from "./util.js";

describe("621. Task Scheduler", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = leastInterval(input);
      expect(result).toBe(expected);
    });
  });
});
