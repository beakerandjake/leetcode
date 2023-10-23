/**
 * Write a recursive function that accepts an int
 * representing the number of 6 sided dice to roll.
 * Return all possible combinations of values that could appears on the dice.
 */

export const diceRoll = (numDice) => {
  const toReturn = [];
  const recurse = (current) => {
    if (current.length === numDice) {
      toReturn.push([...current]);
      return;
    }
    for (let i = 1; i <= 6; i++) {
      current.push(i);
      recurse(current);
      current.pop();
    }
  };
  recurse([]);
  return toReturn;
};
