/**
 * Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
 * According to the definition of h-index on Wikipedia:
 * The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
 */

const simple = (citations) => {
  if (citations.length === 1) {
    return citations[0] ? 1 : 0;
  }
  const countAtLeast = (num) => citations.filter((x) => x >= num).length;
  let toReturn = 0;
  for (let h = 1; h <= citations.length; h++) {
    const count = countAtLeast(h);
    if (h > count) {
      break;
    }
    toReturn = h;
  }
  return toReturn;
};


/**
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex = simple;