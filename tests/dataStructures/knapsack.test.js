import { knapsack } from '../../src/dataStructures/knapsack.js';

describe('knapsack()', () => {
  test.each([null, undefined, {}, 0, 'ASDF', Promise.resolve(true), () => {}])(
    'throws TypeError if items is: %s',
    (items) => expect(() => knapsack(items)).toThrow(TypeError)
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
  ])('throws TypeError if capacity is: %s', (capacity) =>
    expect(() => knapsack([], capacity)).toThrow(TypeError)
  );

  test.each([
    [[], 10, 0],
    [[], 0, 0],
    [[], -10, 0],
    [[{ value: 10, weight: 1 }], 0, 0],
    // [
    //   [
    //     { name: 'stereo', value: 3000, weight: 4 },
    //     { name: 'laptop', value: 2000, weight: 3 },
    //     { name: 'guitar', value: 1500, weight: 1 },
    //   ],
    //   4,
    //   3500,
    // ],
  ])('knapsack(%s, %s) = %s', (items, capacity, expected) => {
    const result = knapsack(items, capacity);
    expect(result).toBe(expected);
  });
});
