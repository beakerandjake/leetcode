/**
 * Convert a non-negative integer num to its English words representation.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = 123
 * Output: "One Hundred Twenty Three"
 *
 *
 * Example 2:
 *
 *
 * Input: num = 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 *
 *
 * Example 3:
 *
 *
 * Input: num = 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= num <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/integer-to-english-words
 */

const decimalMap = new Map([
  ['0', 'Zero'],
  ['1', 'One'],
  ['2', 'Two'],
  ['3', 'Three'],
  ['4', 'Four'],
  ['5', 'Five'],
  ['6', 'Six'],
  ['7', 'Seven'],
  ['8', 'Eight'],
  ['9', 'Nine'],
  ['10', 'Ten'],
  ['11', 'Eleven'],
  ['12', 'Twelve'],
  ['13', 'Thirteen'],
  ['14', 'Fourteen'],
  ['15', 'Fifteen'],
  ['16', 'Sixteen'],
  ['17', 'Seventeen'],
  ['18', 'Eighteen'],
  ['19', 'Nineteen'],
  ['20', 'Twenty'],
  ['30', 'Thirty'],
  ['40', 'Forty'],
  ['50', 'Fifty'],
  ['60', 'Sixty'],
  ['70', 'Seventy'],
  ['80', 'Eighty'],
  ['90', 'Ninety'],
]);

const ones = (digit) => decimalMap.get(digit);

const tens = (digits) => {
  if (digits[0] === '0') {
    return ones(digits[1]);
  }
  return decimalMap.has(digits)
    ? decimalMap.get(digits)
    : `${decimalMap.get(digits[0].padEnd(2, '0'))} ${ones(digits[1])}`;
};

const hundreds = (digits) => {
  if (digits[0] === '0') {
    return tens(digits.slice(1));
  }
  if (digits[1] === '0' && digits[2] === '0') {
    return `${ones(digits[0])} Hundred`;
  }
  return `${ones(digits[0])} Hundred ${tens(digits.slice(1))}`;
};

const zeroPad = (numStr) => {
  const remaining = numStr.length % 3;
  return remaining === 0 ? numStr : numStr.padStart(numStr.length + (3 - remaining), '0');
};

const suffixes = ['', 'Thousand', 'Million', 'Billion'];

/**
 * @param {number} num
 * @return {string}
 */
export const numberToWords = (num) => {
  if (num === 0) {
    return 'Zero';
  }
  const words = [];
  const numStr = zeroPad(`${num}`);
  let suffixIndex = numStr.length / 3 - 1;
  for (let start = 0; start < numStr.length; start += 3, suffixIndex--) {
    const slice = numStr.slice(start, start + 3);
    if (slice !== '000') {
      words.push(hundreds(numStr.slice(start, start + 3)));
      words.push(suffixes[suffixIndex]);
    }
  }
  return words.join(' ').trim();
};
