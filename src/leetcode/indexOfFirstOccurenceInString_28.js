/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = (haystack, needle) => {
  if (needle.length > haystack.length) {
    return -1;
  }
  if (needle.length === haystack.length) {
    return needle === haystack ? 0 : -1;
  }

  let remaining = haystack;
  while (remaining.length >= needle.length) {
    if (remaining.startsWith(needle)) {
      return haystack.length - remaining.length;
    }
    remaining = remaining.slice(1);
  }
  return -1;
};
