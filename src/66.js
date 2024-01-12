/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */

const recursive = (arr, index) => {
  if (index === 0) {
    return arr[0] === 9 ? [1, 0, ...arr.slice(1)] : [arr[0] + 1, ...arr.slice(1)];
  }
  const carry = arr[index] === 9;
  const newArr = [...arr];
  newArr[index] = carry ? 0 : newArr[index] + 1;
  return carry ? recursive(newArr, index - 1) : newArr;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const plusOne = (digits) => recursive(digits, digits.length - 1);
