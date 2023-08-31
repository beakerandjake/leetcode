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
        { name: 'stereo', value: 3000, weight: 4 },
        { name: 'laptop', value: 2000, weight: 3 },
        { name: 'guitar', value: 1500, weight: 1 },
      ],
      4,
      3500,
    ],
  ].forEach(([items, capacity, expected]) => {
    test(`item count: ${items.length}, capacity: ${capacity} returns: ${expected}`, () => {
      const result = knapsack(items, capacity);
      expect(result).toBe(expected);
    });
  });
});
