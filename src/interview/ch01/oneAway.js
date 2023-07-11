const simple = (a, b) => {};

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
