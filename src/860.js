/**
 * At a lemonade stand, each lemonade costs $5. Customers are standing in a queue
 * to buy from you and order one at a time (in the order specified by bills). Each
 * customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
 * You must provide the correct change to each customer so that the net transaction
 * is that the customer pays $5.
 *
 * Note that you do not have any change in hand at first.
 *
 * Given an integer array bills where bills[i] is the bill the ith customer pays,
 * return true if you can provide every customer with the correct change, or false
 * otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: bills = [5,5,5,10,20]
 * Output: true
 * Explanation:
 * From the first 3 customers, we collect three $5 bills in order.
 * From the fourth customer, we collect a $10 bill and give back a $5.
 * From the fifth customer, we give a $10 bill and a $5 bill.
 * Since all customers got correct change, we output true.
 *
 *
 * Example 2:
 *
 *
 * Input: bills = [5,5,10,10,20]
 * Output: false
 * Explanation:
 * From the first two customers in order, we collect two $5 bills.
 * For the next two customers in order, we collect a $10 bill and give back a $5 bill.
 * For the last customer, we can not give the change of $15 back because we only have two $10 bills.
 * Since not every customer received the correct change, the answer is false.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= bills.length <= 105
 *  * bills[i] is either 5, 10, or 20.
 *
 *
 *
 * https://leetcode.com/problems/lemonade-change
 */

// creates a new purse out of the bills
const purse = (fives, tens, twenties) => [fives, tens, twenties];

// returns the number of five bills in the purse
const fives = (p) => p[0];

// returns the number of ten bills in the purse
const tens = (p) => p[1];

// returns the number of twenty bills in the purse
const twenties = (p) => p[2];

// returns the purse index of the bill
const billIndex = (bill) => {
  switch (bill) {
    case 5:
      return 0;
    case 10:
      return 1;
    case 20:
      return 2;
    default:
      throw new Error(`Unknown bill: ${bill}`);
  }
};

// returns a new purse with the bill added
const add = (p, bill) => {
  const newPurse = [...p];
  newPurse[billIndex(bill)]++;
  return newPurse;
};

// returns a new purse with the bill removed
const remove = (p, bill) => {
  const newPurse = [...p];
  newPurse[billIndex(bill)]--;
  return newPurse;
};

// attempts to use the purse to provide the amount specified
// returns an array containing:
//  a bool indicating if the purse was able to make change
//  the new purse that results from making change
const makeChange = (p, amount) => {
  if (amount === 0) {
    return [true, p];
  }

  if (amount >= 20 && twenties(p) > 0) {
    return makeChange(remove(p, 20), amount - 20);
  }

  if (amount >= 10 && tens(p) > 0) {
    return makeChange(remove(p, 10), amount - 10);
  }

  return fives(p) > 0 ? makeChange(remove(p, 5), amount - 5) : [false, p];
};

/**
 * @param {number[]} bills
 * @return {boolean}
 */
export const lemonadeChange = (bills) => {
  let currentPurse = purse(0, 0, 0);
  for (const bill of bills) {
    const [haveChange, newPurse] = makeChange(currentPurse, bill - 5);
    if (!haveChange) {
      return false;
    }
    currentPurse = add(newPurse, bill);
  }
  return true;
};
