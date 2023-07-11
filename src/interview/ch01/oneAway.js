const getCharCounts = (str) =>
  [...str].reduce((acc, char) => {
    acc[char.charCodeAt()] += 1;
    return acc;
  }, Array(256).fill(0));

const sum = (arr) => arr.reduce((total, x) => total + x, 0);

const simple = (a, b) => {
  const aCount = getCharCounts(a);
  const bCount = getCharCounts(b);
  const changes = [];
  for (let index = 0; index < aCount.length; index++) {
    const diff = aCount[index] - bCount[index];
    if (diff === 0) {
      continue;
    }
    changes.push(diff);
  }

  if (changes.length > 2) {
    return false;
  }

  if (changes.length === 0) {
    return true;
  }

  const sumOfChanges = sum(changes);
  return sumOfChanges === 0 || Math.abs(sumOfChanges) === 1;
};

export const oneAway = (a, b) => {
  if (a == null || b == null) {
    return false;
  }

  if (Math.abs(a.length - b.length) > 1) {
    return false;
  }

  if (a === b) {
    return true;
  }

  return simple(a, b);
};
