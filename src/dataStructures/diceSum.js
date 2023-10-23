/**
 * Write a recursive function that accepts an int
 * representing the number of 6 sided dice to roll
 * and a desired sum.
 * Return all possible combinations of dice rolls that add up to the sum.
 */

export const diceSum = (numDice, desiredSum) => {
  const toReturn = [];
  const recurse = (chosenDice, sumSoFar) => {
    if (chosenDice.length === numDice) {
      toReturn.push([...chosenDice]);
      return;
    }

    for (let i = 1; i <= 6; i++) {
      const newSum = sumSoFar + i;
      const remainingDie = numDice - chosenDice.length - 1;

      // bail if not possible to equal desired sum
      if (
        newSum + 1 * remainingDie > desiredSum ||
        newSum + 6 * remainingDie < desiredSum
      ) {
        continue;
      }

      chosenDice.push(i);
      recurse(chosenDice, newSum);
      chosenDice.pop();
    }
  };
  recurse([], 0);
  return toReturn;
};
