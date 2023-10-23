/**
 * Write a recursive function print binary that accepts an integer number of
 * digits and prints all binary numbers that have exactly that many digits, in ascending
 * order, one per line.
 *
 * printBinary(2)
 *  00
 *  01
 *  10
 *  11
 *
 * Use recursion: do not use any loops.
 */

export const printBinary = (n) => {
  const toReturn = [];
  const recursive = (current) => {
    if (current.length === n) {
      toReturn.push(current.join(''));
      return;
    }
    recursive([...current, 0]);
    recursive([...current, 1]);
  };
  recursive([]);
  return toReturn;
};
