/* eslint-disable no-param-reassign */
/**
 * Given an array of characters chars, compress it using the following algorithm:
 *
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 *     If the group's length is 1, append the character to s.
 *     Otherwise, append the character followed by the group's length.
 *
 * The compressed string s should not be returned separately
 * but instead, be stored in the input character array chars.
 * Note that group lengths that are 10 or longer will be split into multiple characters in chars.
 * After you are done modifying the input array, return the new length of the array.
 * You must write an algorithm that uses only constant extra space.
 */

const consumeDuplicateChars = (chars, index) => {
  for (let i = index + 1; i < chars.length; i++) {
    if (chars[i] !== chars[index]) {
      return i;
    }
  }
  return chars.length;
};

const writeChars = (chars, writeIndex, char, repeatCount) => {
  if (repeatCount === 1) {
    chars[writeIndex] = char;
    return writeIndex + 1;
  }

  if (repeatCount < 10) {
    chars[writeIndex] = char;
    chars[writeIndex + 1] = `${repeatCount}`;
    return writeIndex + 2;
  }

  chars[writeIndex++] = char;
  const countString = `${repeatCount}`;
  for (let i = 0; i < countString.length; i++) {
    chars[writeIndex++] = countString[i];
  }
  return writeIndex;
};

/**
 * @param {character[]} chars
 * @return {number}
 */
export const compress = (chars) => {
  if (chars.length === 1) {
    return 1;
  }
  let charIndex = 0;
  let writeIndex = 0;
  while (charIndex < chars.length) {
    const end = consumeDuplicateChars(chars, charIndex);
    writeIndex = writeChars(chars, writeIndex, chars[charIndex], end - charIndex);
    charIndex = end;
  }
  return writeIndex;
};
