const endsWith = (str, char) => str[str.length - 1] === char;

export const urlify = (str) => {
  if (!str || str.length <= 1) {
    return str;
  }

  if (!endsWith(str, ' ')) {
    return str;
  }
};
