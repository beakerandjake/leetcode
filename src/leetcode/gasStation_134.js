/**
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
 * You begin the journey with an empty tank at one of the gas stations.
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around
 * the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export const canCompleteCircuit = (gas, cost) => {
  const test = (start) => {
    let current = start;
    let tank = 0;
    for (let i = 0; i < gas.length; i++) {
      const newTank = tank + gas[current];
      const travelCost = cost[current];
      if (travelCost > newTank) {
        return -1;
      }
      current = (current + 1) % gas.length;
      tank = newTank - travelCost;
    }
    return start;
  };

  for (let i = 0; i < gas.length; i++) {
    // can't start at this gas station if travel cost is more than initial fill up
    if (gas[i] < cost[i] || (gas[i] === 0 && cost[i] === 0)) {
      continue;
    }
    if (test(i) === i) {
      return i;
    }
  }
  return -1;
};
