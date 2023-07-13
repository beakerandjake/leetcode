const isSubString = (s1, s2) => s1.includes(s2);

const simple = (s1, s2) => {
  const test = `${s1}${s1}`;
  return isSubString(test, s2);
};

export const stringRotation = (s1, s2) => {
  if (s1 == null || s2 == null) {
    return false;
  }

  if (s1.length === 0 || s2.length === 0) {
    return false;
  }

  if (s1.length !== s2.length) {
    return false;
  }

  return simple(s1, s2);
};
