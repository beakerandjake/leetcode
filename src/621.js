/**
 * You are given an array of CPU tasks, each represented by letters A to Z, and a
 * cooling time, n. Each cycle or interval allows the completion of one task. Tasks
 * can be completed in any order, but there's a constraint: identical tasks must be
 * separated by at least n intervals due to cooling time.
 *
 * Return the minimum number of intervals required to complete all tasks.
 *
 *
 *
 * Example 1:
 *
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 *
 * Output: 8
 *
 * Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
 *
 * After completing task A, you must wait two cycles before doing A again. The same
 * applies to task B. In the 3rd interval, neither A nor B can be done, so you
 * idle. By the 4th cycle, you can do A again as 2 intervals have passed.
 *
 * Example 2:
 *
 * Input: tasks = ["A","C","A","B","D","B"], n = 1
 *
 * Output: 6
 *
 * Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
 *
 * With a cooling interval of 1, you can repeat a task after just one other task.
 *
 * Example 3:
 *
 * Input: tasks = ["A","A","A", "B","B","B"], n = 3
 *
 * Output: 10
 *
 * Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle ->
 * idle -> A -> B.
 *
 * There are only two types of tasks, A and B, which need to be separated by 3
 * intervals. This leads to idling twice between repetitions of these tasks.
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= tasks.length <= 104
 *  * tasks[i] is an uppercase English letter.
 *  * 0 <= n <= 100
 *
 *
 *
 * https://leetcode.com/problems/task-scheduler
 */

class TaskQueue {
  #items;
  #head;

  constructor(items) {
    this.#items = new Map(items);
    this.#head = this.#findMax();
  }

  peek() {
    return this.#head;
  }

  insert(key, count) {
    this.#items.set(key, count);
    this.#head = this.#findMax();
  }

  getPriority(key) {
    return this.#items.get(key);
  }

  remove(key) {
    if (this.#items.delete(key)) {
      this.#head = this.#findMax();
    }
  }

  size() {
    return this.#items.size;
  }

  #findMax() {
    let maxKey = null;
    let maxCount = Number.MIN_SAFE_INTEGER;
    for (const [key, count] of this.#items.entries()) {
      if (count > maxCount) {
        maxKey = key;
        maxCount = count;
      }
    }
    return maxKey;
  }
}

class Cooldown {
  constructor(task, count, expires) {
    this.task = task;
    this.count = count;
    this.expires = expires;
  }
}

const frequencyMap = (items) =>
  items.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
export const leastInterval = (tasks, n) => {
  const pq = new TaskQueue(frequencyMap(tasks));
  const cooldowns = [];
  let cycle = 0;
  while (pq.size() || cooldowns.length) {
    // see if the oldest cooldown has expired.
    if (cooldowns.length && cooldowns[0].expires < cycle) {
      const { task, count } = cooldowns.shift();
      pq.insert(task, count);
    }
    // find the most urgent available task (if any)
    const task = pq.peek();
    if (task) {
      // re-queue only if this wasn't the last execution of the task.
      if (pq.getPriority(task) > 1) {
        cooldowns.push(new Cooldown(task, pq.getPriority(task) - 1, cycle + n));
      }
      pq.remove(task);
    }
    cycle++;
  }
  return cycle;
};
