import { josephusProblem } from '../src/josephusProblem.js';

test.todo('josephus');

describe('josephusProblem()', () => {
  test('41 people and skip 3, returns 31', () => {
    const result = josephusProblem(41, 3);
    expect(result).toBe(31);
  });
});
