import { removeElements } from "../src/203.js";
import { arrToStr } from "./util.js";

describe("203. Remove Linked List Elements", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = removeElements(input);
      expect(result).toBe(expected);
    });
  });
});
