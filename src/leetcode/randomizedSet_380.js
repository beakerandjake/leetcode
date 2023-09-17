/* eslint-disable func-names */

export const RandomizedSet = function () {
  this.itemLookup = {};
  this.items = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.itemLookup) {
    return false;
  }

  this.items.push(val);
  this.itemLookup[val] = this.items.length - 1;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!(val in this.itemLookup)) {
    return false;
  }

  const index = this.itemLookup[val];
  const end = this.items[this.items.length - 1];
  this.items[index] = this.items.pop();
  if (end !== undefined && end !== val) {
    this.itemLookup[end] = index;
  }

  delete this.itemLookup[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.items[Math.floor(Math.random() * this.items.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
