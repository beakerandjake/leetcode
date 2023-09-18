/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

// const simple = (haystack, needle) => {
//   if (needle.length > haystack.length) {
//     return -1;
//   }
//   if (needle.length === haystack.length) {
//     return needle === haystack ? 0 : -1;
//   }

//   let remaining = haystack;
//   while (remaining.length >= needle.length) {
//     if (remaining.startsWith(needle)) {
//       return haystack.length - remaining.length;
//     }
//     remaining = remaining.slice(1);
//   }
//   return -1;
// };

// const regex = (haystack, needle) => {
//   if (needle.length > haystack.length) {
//     return -1;
//   }
//   if (needle.length === haystack.length) {
//     return needle === haystack ? 0 : -1;
//   }
//   const match = haystack.match(new RegExp(needle));
//   return match ? match.index : -1;
// };

// const arrayFns = (haystack, needle) => {
//   if (needle.length > haystack.length) {
//     return -1;
//   }
//   if (needle.length === haystack.length) {
//     return needle === haystack ? 0 : -1;
//   }
//   const startsWithNeedle = (index, needleChars) =>
//     needleChars.every((char, i) => haystack[i + index] === char);
//   const needleChars = [...needle];
//   return [...haystack].findIndex((_, index) => startsWithNeedle(index, needleChars));
// };

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

  const matchesWindow = (windowStart) => {
    for (let i = 0; i < needle.length; i++) {
      if (haystack[windowStart + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  };

  const windowMax =
    needle.length === 1 ? haystack.length : haystack.length - needle.length;
  for (let i = 0; i <= windowMax; i++) {
    if (matchesWindow(i)) {
      return i;
    }
  }
  return -1;
};
