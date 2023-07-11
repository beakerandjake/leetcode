const checkForEdit = (a, b) => {
  let foundChange = false;

  for (let index = 0; index < a.length; index++) {
    if (a[index] === b[index]) {
      continue;
    }
    if (foundChange) {
      return false;
    }
    foundChange = true;
  }

  return true;
};

const sortByLength = (a, b) => (a.length < b.length ? [a, b] : [b, a]);

const checkForAddOrRemove = (a, b) => {
  const [smaller, larger] = sortByLength(a, b);
  let changeFound = false;
  let lIndex = 0;
  for (let sIndex = 0; sIndex < smaller.length; sIndex++) {
    const sChar = smaller[sIndex];
    if (sChar === larger[lIndex++]) {
      continue;
    }
    if (changeFound || sChar !== larger[lIndex++]) {
      return false;
    }
    changeFound = true;
  }

  return true;
};

const simpler = (a, b) =>
  a.length === b.length ? checkForEdit(a, b) : checkForAddOrRemove(a, b);

export const oneAway = (a, b) => {
  if (a == null || b == null) {
    return false;
  }

  if (Math.abs(a.length - b.length) > 1) {
    return false;
  }

  return simpler(a, b);
};
