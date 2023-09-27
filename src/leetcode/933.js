/* eslint-disable func-names */

export const RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const floor = t - 3000;
  while (this.queue.length && this.queue[0] < floor) {
    this.queue.shift();
  }
  this.queue.push(t);
  return this.queue.length;
};
