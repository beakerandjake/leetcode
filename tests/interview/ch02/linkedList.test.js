import { expectListEqual, str, toList, toNodes } from './util.js';

describe('head()', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (values) => {
      const nodes = toNodes(values);
      const expected = nodes[0];
      const list = toList(nodes);
      test(`${str(values)}.head = ${expected?.value}`, () => {
        const result = list.head;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('tail()', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (values) => {
      const nodes = toNodes(values);
      const expected = nodes[nodes.length - 1];
      const list = toList(nodes);
      test(`${str(values)}.tail = ${expected?.value}`, () => {
        const result = list.tail;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('count()', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (values) => {
      const nodes = toNodes(values);
      const expected = nodes.length;
      const list = toList(nodes);
      test(`${str(values)}.count = ${expected}`, () => {
        const result = list.count;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('contains()', () => {
  [
    [[], 1, false],
    [[1], 1, true],
    [[1], 2, false],
    [[1, 2], 1, true],
    [[1, 2], 2, true],
    [[1, 2], 3, false],
    [[1, 2, 3], 1, true],
    [[1, 2, 3], 2, true],
    [[1, 2, 3], 3, true],
    [[1, 2, 3], 4, false],
    [[1, 2, 3, 4], 1, true],
    [[1, 2, 3, 4], 2, true],
    [[1, 2, 3, 4], 3, true],
    [[1, 2, 3, 4], 4, true],
    [[1, 2, 3, 4], 5, false],
    [[1, 2, 3, 4, 5], 1, true],
    [[1, 2, 3, 4, 5], 2, true],
    [[1, 2, 3, 4, 5], 3, true],
    [[1, 2, 3, 4, 5], 4, true],
    [[1, 2, 3, 4, 5], 5, true],
    [[1, 2, 3, 4, 5], 6, false],
    [[1, 2, 3, 4, 5, 6], 1, true],
    [[1, 2, 3, 4, 5, 6], 2, true],
    [[1, 2, 3, 4, 5, 6], 3, true],
    [[1, 2, 3, 4, 5, 6], 4, true],
    [[1, 2, 3, 4, 5, 6], 5, true],
    [[1, 2, 3, 4, 5, 6], 6, true],
    [[1, 2, 3, 4, 5, 6], 7, false],
  ].forEach(([values, search, expected]) => {
    const list = toList(toNodes(values));
    test(`${str(values)}.contains(${search}) = ${expected}`, () => {
      const result = list.contains(search);
      expect(result).toBe(expected);
    });
  });
});

describe('find()', () => {
  [
    [[], 1, -1],
    [[1], 1, 0],
    [[1], 2, -1],
    [[1, 2], 1, 0],
    [[1, 2], 2, 1],
    [[1, 2], 3, -1],
    [[1, 2, 3], 1, 0],
    [[1, 2, 3], 2, 1],
    [[1, 2, 3], 3, 2],
    [[1, 2, 3], 4, -1],
    [[1, 2, 3, 4], 1, 0],
    [[1, 2, 3, 4], 2, 1],
    [[1, 2, 3, 4], 3, 2],
    [[1, 2, 3, 4], 4, 3],
    [[1, 2, 3, 4], 5, -1],
    [[1, 2, 3, 4, 5], 1, 0],
    [[1, 2, 3, 4, 5], 2, 1],
    [[1, 2, 3, 4, 5], 3, 2],
    [[1, 2, 3, 4, 5], 4, 3],
    [[1, 2, 3, 4, 5], 5, 4],
    [[1, 2, 3, 4, 5], 6, -1],
    [[1, 2, 3, 4, 5, 6], 1, 0],
    [[1, 2, 3, 4, 5, 6], 2, 1],
    [[1, 2, 3, 4, 5, 6], 3, 2],
    [[1, 2, 3, 4, 5, 6], 4, 3],
    [[1, 2, 3, 4, 5, 6], 5, 4],
    [[1, 2, 3, 4, 5, 6], 6, 5],
    [[1, 2, 3, 4, 5, 6], 7, -1],
  ].forEach(([values, search, index]) => {
    const nodes = toNodes(values);
    const expected = nodes[index];
    const list = toList(nodes);
    test(`${str(values)}.find(${search}) = ${values[index]}`, () => {
      const result = list.find(search);
      expect(result).toBe(expected);
    });
  });
});

describe('addHead()', () => {
  [
    [[], 1, [1]],
    [[1], 2, [2, 1]],
    [[2, 1], 3, [3, 2, 1]],
    [[3, 2, 1], 4, [4, 3, 2, 1]],
    [[4, 3, 2, 1], 5, [5, 4, 3, 2, 1]],
    [[5, 4, 3, 2, 1], 6, [6, 5, 4, 3, 2, 1]],
  ].forEach(([before, toAdd, after]) => {
    const list = toList(toNodes(before));
    const expected = toList(toNodes(after));
    test(`${str(before)}.addHead(${toAdd}) = ${str(after)}`, () => {
      list.addHead(toAdd);
      expectListEqual(list, expected);
    });
  });
});

describe('addTail()', () => {
  [
    [[], 1, [1]],
    [[1], 2, [1, 2]],
    [[1, 2], 3, [1, 2, 3]],
    [[1, 2, 3], 4, [1, 2, 3, 4]],
    [[1, 2, 3, 4], 5, [1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5], 6, [1, 2, 3, 4, 5, 6]],
  ].forEach(([before, toAdd, after]) => {
    const list = toList(toNodes(before));
    const expected = toList(toNodes(after));
    test(`${str(before)}.addTail(${toAdd}) = ${str(after)}`, () => {
      list.addTail(toAdd);
      expectListEqual(list, expected);
    });
  });
});

describe('addAfter()', () => {
  [
    [[1], 2, 0, [1, 2]],
    [[1, 2], 3, 0, [1, 3, 2]],
    [[1, 2, 3], 4, 0, [1, 4, 2, 3]],
    [[1, 2, 3, 4], 5, 1, [1, 2, 5, 3, 4]],
    [[1, 2, 3, 4, 5], 6, 3, [1, 2, 3, 4, 6, 5]],
    [[1, 2, 3, 4, 5, 6], 7, 5, [1, 2, 3, 4, 5, 6, 7]],
  ].forEach(([before, value, index, after]) => {
    const nodes = toNodes(before);
    const target = nodes[index];
    const list = toList(nodes);
    const expected = toList(toNodes(after));
    test(`${str(before)}.addAfter(${value},${before[index]}) = ${str(after)}`, () => {
      list.addAfter(value, target);
      expectListEqual(list, expected);
    });
  });
});

describe('remove()', () => {
  [
    [[], 1, []],
    [[1], 1, []],
    [[1, 2], 2, [1]],
    [[1, 2], 1, [2]],
    [[1, 2, 3], 1, [2, 3]],
    [[1, 2, 3], 2, [1, 3]],
    [[1, 2, 3], 3, [1, 2]],
    [[1, 2, 3, 4], 1, [2, 3, 4]],
    [[1, 2, 3, 4], 2, [1, 3, 4]],
    [[1, 2, 3, 4], 3, [1, 2, 4]],
    [[1, 2, 3, 4], 4, [1, 2, 3]],
    [[1, 2, 3, 4, 5], 1, [2, 3, 4, 5]],
    [[1, 2, 3, 4, 5], 2, [1, 3, 4, 5]],
    [[1, 2, 3, 4, 5], 3, [1, 2, 4, 5]],
    [[1, 2, 3, 4, 5], 4, [1, 2, 3, 5]],
    [[1, 2, 3, 4, 5], 5, [1, 2, 3, 4]],
    [[1, 2, 3, 4, 5, 6], 1, [2, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6], 2, [1, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6], 3, [1, 2, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6], 4, [1, 2, 3, 5, 6]],
    [[1, 2, 3, 4, 5, 6], 5, [1, 2, 3, 4, 6]],
    [[1, 2, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
  ].forEach(([before, value, after]) => {
    const list = toList(toNodes(before));
    const expectedReturnValue = after.length < before.length;
    const expectedList = toList(toNodes(after));
    test(`${str(before)}.remove(${value}) = ${expectedReturnValue}`, () => {
      const result = list.remove(value);
      expect(result).toBe(expectedReturnValue);
      expectListEqual(list, expectedList);
    });
  });
});

describe('removeFirst()', () => {
  [
    [[], []],
    [[1], []],
    [[1, 2], [2]],
    [
      [1, 2, 3],
      [2, 3],
    ],
    [
      [1, 2, 3, 4],
      [2, 3, 4],
    ],
    [
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5],
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6],
    ],
  ].forEach(([before, after]) => {
    const list = toList(toNodes(before));
    const expectedList = toList(toNodes(after));
    test(`${str(before)}.removeFirst() = ${str(after)}`, () => {
      list.removeFirst();
      expectListEqual(list, expectedList);
    });
  });
});

describe('removeLast()', () => {
  [
    [[], []],
    [[1], []],
    [[1, 2], [1]],
    [
      [1, 2, 3],
      [1, 2],
    ],
    [
      [1, 2, 3, 4],
      [1, 2, 3],
    ],
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4],
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5],
    ],
  ].forEach(([before, after]) => {
    const list = toList(toNodes(before));
    const expectedList = toList(toNodes(after));
    test(`${str(before)}.removeLast() = ${str(after)}`, () => {
      list.removeLast();
      expectListEqual(list, expectedList);
    });
  });
});
