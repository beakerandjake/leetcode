import { knapsack } from '../../src/dataStructures/knapsack.js';

describe('knapsack()', () => {
  test.each([null, undefined, {}, 0, 'ASDF', Promise.resolve(true), () => {}])(
    'items: %s, capacity: 0, throws TypeError',
    (items) => expect(() => knapsack(items, 0)).toThrow(TypeError)
  );

  test.each([
    null,
    undefined,
    {},
    [],
    'ASDF',
    Promise.resolve(true),
    () => {},
    NaN,
    Infinity,
  ])('item count: 0, capacity: %s, throws TypeError', (capacity) =>
    expect(() => knapsack([], capacity)).toThrow(TypeError)
  );

  [
    [[], 10, 0],
    [[], 0, 0],
    [[], -10, 0],
    [[{ value: 10, weight: 1 }], 0, 0],
    [
      [
        { value: 3000, weight: 4 },
        { value: 2000, weight: 3 },
        { value: 1500, weight: 1 },
      ],
      4,
      3500,
    ],
    [
      [
        { value: 3000, weight: 4 },
        { value: 2000, weight: 3 },
        { value: 1500, weight: 1 },
        { value: 2000, weight: 1 },
      ],
      4,
      4000,
    ],
    [
      [
        { value: 3000, weight: 4 },
        { value: 2000, weight: 3 },
        { value: 1500, weight: 1 },
        { value: 2000, weight: 1 },
        { value: 1000, weight: 1 },
      ],
      4,
      4500,
    ],
    [
      [
        { value: 10, weight: 3 },
        { value: 3, weight: 1 },
        { value: 9, weight: 2 },
        { value: 2, weight: 5 },
        { value: 6, weight: 1 },
      ],
      6,
      25,
    ],
    [
      [
        { value: 360, weight: 7 },
        { value: 83, weight: 0 },
        { value: 59, weight: 30 },
        { value: 130, weight: 22 },
        { value: 431, weight: 80 },
        { value: 67, weight: 94 },
        { value: 230, weight: 11 },
        { value: 52, weight: 81 },
        { value: 93, weight: 70 },
        { value: 125, weight: 64 },
        { value: 670, weight: 59 },
        { value: 892, weight: 18 },
        { value: 600, weight: 0 },
        { value: 38, weight: 36 },
        { value: 48, weight: 3 },
        { value: 147, weight: 8 },
        { value: 78, weight: 15 },
        { value: 256, weight: 42 },
        { value: 63, weight: 9 },
        { value: 17, weight: 0 },
        { value: 120, weight: 42 },
        { value: 164, weight: 47 },
        { value: 432, weight: 52 },
        { value: 35, weight: 32 },
        { value: 92, weight: 26 },
        { value: 110, weight: 48 },
        { value: 22, weight: 55 },
        { value: 42, weight: 6 },
        { value: 50, weight: 29 },
        { value: 323, weight: 84 },
        { value: 514, weight: 2 },
        { value: 28, weight: 4 },
        { value: 87, weight: 18 },
        { value: 73, weight: 56 },
        { value: 78, weight: 7 },
        { value: 15, weight: 29 },
        { value: 26, weight: 93 },
        { value: 78, weight: 44 },
        { value: 210, weight: 71 },
        { value: 36, weight: 3 },
        { value: 85, weight: 86 },
        { value: 189, weight: 66 },
        { value: 274, weight: 31 },
        { value: 43, weight: 65 },
        { value: 33, weight: 0 },
        { value: 10, weight: 79 },
        { value: 19, weight: 20 },
        { value: 389, weight: 65 },
        { value: 276, weight: 52 },
        { value: 312, weight: 13 },
      ],
      850,
      7534,
    ],
  ].forEach(([items, capacity, expected]) => {
    test(`item count: ${items.length}, capacity: ${capacity} returns: ${expected}`, () => {
      const result = knapsack(items, capacity);
      expect(result).toBe(expected);
    });
  });
});
