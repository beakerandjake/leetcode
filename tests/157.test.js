import { solution } from '../src/157.js';

const read4 = (file) => {
  let fileIndex = 0;
  return (buff4) => {
    if (fileIndex >= file.length) {
      return 0;
    }
    let readCount = 0;
    for (let i = 0; i < 4; i++) {
      if (fileIndex + i < file.length) {
        buff4[i] = file[fileIndex + i];
        readCount++;
      } else {
        buff4[i] = null;
      }
    }
    fileIndex += 4;
    return readCount;
  };
};

describe('157. Read N Characters Given Read4', () => {
  [
    ['abc', 4, 3],
    ['abcde', 5, 5],
    ['abcdABCD1234', 12, 12],
    ['asdfqwerzxcv', 6, 6],
  ].forEach(([file, n, expected]) => {
    test(`${file},${n} -> ${expected}`, () => {
      const buffer = [];
      const result = solution(read4(file))(buffer, n);
      expect(buffer).toEqual([...file.slice(0, n)]);
      expect(result).toBe(expected);
    });
  });
});
