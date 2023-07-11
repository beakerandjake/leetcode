const compressRepeats = (str) => `${str[0]}${str.length}`;

const repeatSliceEnd = (str, startIndex) => {
  const char = str[startIndex];

  for (let index = startIndex; index < str.length; index++) {
    if (str[index] !== char) {
      return index;
    }
  }

  return str.length;
};

const simple = (str) => {
  const output = [];
  let index = 0;

  while (index !== str.length) {
    const sliceEnd = repeatSliceEnd(str, index);
    output.push(compressRepeats(str.slice(index, sliceEnd)));
    index = sliceEnd;
  }

  return output.join('');
};

export const stringCompression = (str) => {
  if (!str || str.length < 3) {
    return str;
  }

  const compressed = simple(str);

  return compressed.length < str.length ? compressed : str;
};
