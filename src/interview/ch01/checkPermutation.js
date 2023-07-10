const naive = (a, b) => {
  const getCharCounts = (str) => {
    const counts = Array(256).fill(0);
    [...str].forEach((char) => {
      counts[char.charCodeAt()] += 1;
    });
    return counts;
  };

  const aCounts = getCharCounts(a);
  const bCounts = getCharCounts(b);

  if (aCounts.some((count, index) => count !== bCounts[index])) {
    return false;
  }

  return a !== b;
};

export const checkPermutation = (a, b) => {
  if (!a || !b) {
    return false;
  }

  if (a.length !== b.length || a.length === 1) {
    return false;
  }

  if (a === b) {
    return false;
  }

  return naive(a, b);
};
