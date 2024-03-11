import { bagOfTokensScore } from "../src/948.js";
import { arrToStr } from "./util.js";

describe("948. Bag of Tokens", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = bagOfTokensScore(input);
      expect(result).toBe(expected);
    });
  });
});
