const characterCounts = (str) =>
  [...str].reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char] += 1;
    }
    return acc;
  }, {});

const simple = (str) => {
  const counts = characterCounts(str);
  const [even, odd] = Object.keys(counts).reduce(
    (acc, char) => {
      acc[counts[char] % 2 === 0 ? 0 : 1] += 1;
      return acc;
    },
    [0, 0]
  );
  return (odd === 0 && even > 0) || (odd === 1 && even > 0);
};

export const palindromePermutation = (str) => {
  if (!str || str.length < 1) {
    return false;
  }

  if (str.length === 1) {
    return true;
  }

  return simple(str);
};
