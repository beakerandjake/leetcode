import { reorderList } from "../src/143.js";
import { generateTestName } from "./util.js";

describe("143. Reorder List", () => {
  [
    [
      [1, 2, 3, 4],
      [1, 4, 2, 3],
    ],
    [
      [1, 2, 3, 4, 5],
      [1, 5, 2, 4, 3],
    ],
  ].forEach((args) => {
    const [head, expected] = args;
    test(generateTestName(reorderList, ...args), () => {
      const result = reorderList(head);
      expect(result).toEqual(expected);
    });
  });
});
