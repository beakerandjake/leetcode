import { createCounter } from "../src/2620.js";
import { generateTestName } from "./util.js";

describe("2620. Counter", () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(createCounter, ...args), () => {
      const result = createCounter();
      expect(result).toBe(expected);
    });
  });
});
