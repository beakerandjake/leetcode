/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

const iterator = (str) => {
  let index = str.length - 1;
  return () => (index >= 0 ? str[index--] : '0');
};

const rules = {
  '00false': ['0', false],
  '01false': ['1', false],
  '10false': ['1', false],
  '11false': ['0', true],
  '00true': ['1', false],
  '10true': ['0', true],
  '01true': ['0', true],
  '11true': ['1', true],
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = (a, b) => {
  const aIterator = iterator(a);
  const bIterator = iterator(b);
  const maxLength = Math.max(a.length, b.length);
  const output = [];
  let carry = false;
  for (let i = 0; i < maxLength; i++) {
    const [bit, carryResult] = rules[`${aIterator()}${bIterator()}${carry}`];
    output.push(bit);
    carry = carryResult;
  }
  if (carry) {
    output.push('1');
  }
  return output.reverse().join('');
};
