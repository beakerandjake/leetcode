/**
 * Write a function that reverses a string.
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

const recursive = (chars, left, right) => {
  if (left >= right) {
    return;
  }
  const temp = chars[left];
  chars[left] = chars[right];
  chars[right] = temp;
  recursive(chars, left + 1, right - 1);
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = (chars) => {
  recursive(chars, 0, chars.length - 1);
};
