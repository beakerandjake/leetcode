const characterCounts = (str) =>
  [...str].reduce((acc, char) => {
    acc[char.charCodeAt()] += 1;
    return acc;
  }, Array(256).fill(0));

const simple = (str) => {
  const counts = characterCounts(str).filter(Boolean);
  const oddCount = counts.filter((count) => count % 2 !== 0).length;
  const evenCount = counts.filter((count) => count % 2 === 0).length;
  return (oddCount === 0 && evenCount > 0) || (oddCount === 1 && evenCount > 0);
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
