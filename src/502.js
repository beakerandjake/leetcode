/**
 * Suppose LeetCode will start its IPO soon. In order to sell a good price of its
 * shares to Venture Capital, LeetCode would like to work on some projects to
 * increase its capital before the IPO. Since it has limited resources, it can only
 * finish at most k distinct projects before the IPO. Help LeetCode design the best
 * way to maximize its total capital after finishing at most k distinct projects.
 *
 * You are given n projects where the ith project has a pure profit profits[i] and
 * a minimum capital of capital[i] is needed to start it.
 *
 * Initially, you have w capital. When you finish a project, you will obtain its
 * pure profit and the profit will be added to your total capital.
 *
 * Pick a list of at most k distinct projects from given projects to maximize your
 * final capital, and return the final maximized capital.
 *
 * The answer is guaranteed to fit in a 32-bit signed integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
 * Output: 4
 * Explanation: Since your initial capital is 0, you can only start the project indexed 0.
 * After finishing it you will obtain profit 1 and your capital becomes 1.
 * With capital 1, you can either start the project indexed 1 or the project indexed 2.
 * Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
 * Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
 *
 *
 * Example 2:
 *
 *
 * Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
 * Output: 6
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= k <= 105
 *  * 0 <= w <= 109
 *  * n == profits.length
 *  * n == capital.length
 *  * 1 <= n <= 105
 *  * 0 <= profits[i] <= 104
 *  * 0 <= capital[i] <= 109
 *
 *
 *
 * https://leetcode.com/problems/ipo
 */

const toProject = (profit, capital) => [profit, capital];

const zip = (profits, requiredCapital) => {
  const projects = [];
  for (let i = 0; i < profits.length; i++) {
    projects.push(toProject(profits[i], requiredCapital[i]));
  }
  return projects;
};

const profit = (project) => project[0];

const capital = (project) => project[1];

// class Heap {
//   #items = [];
//   #maxIndex = -1;
//   #priorityExtractorFn;

//   constructor(priorityExtractorFn = (x) => x) {
//     this.#priorityExtractorFn = priorityExtractorFn;
//   }

//   push(...item) {
//     this.#items.push(...item);
//     this.#maxIndex = this.#findMax();
//   }

//   peek() {
//     if (this.#maxIndex === -1) {
//       return null;
//     }
//     return this.#items[this.#maxIndex];
//   }

//   pop() {
//     if (this.#maxIndex === -1) {
//       return null;
//     }
//     const toReturn = this.#items[this.#maxIndex];
//     this.#items.splice(this.#maxIndex, 1);
//     this.#maxIndex = this.#findMax();
//     return toReturn;
//   }

//   size() {
//     return this.#items.length;
//   }

//   #findMax() {
//     if (!this.#items.length) {
//       return -1;
//     }
//     let maxPriority = this.#priorityExtractorFn(this.#items[0]);
//     let maxIndex = 0;
//     for (let i = 1; i < this.#items.length; i++) {
//       if (this.#priorityExtractorFn(this.#items[i]) > maxPriority) {
//         maxPriority = this.#priorityExtractorFn(this.#items[i]);
//         maxIndex = i;
//       }
//     }
//     return maxIndex;
//   }
// }

class MaxHeap {
  #items = [];
  #size = 0;

  get size() {
    return this.#size;
  }

  push(key, value) {
    this.#size++;
    this.#items[this.#size] = { key, value };
    this.#bubbleUp();
  }

  peek() {
    return this.#items[1].value;
  }

  #bubbleUp() {
    const parent = (i) => Math.floor(i / 2);

    let i = this.#size;
    while (i > 1 && this.#items[i].key > this.#items[parent(i)].key) {
      this.#swap(i, parent(i));
      i = parent(i);
    }
  }

  pop() {
    if (!this.#size) {
      return undefined;
    }
    this.#swap(1, this.#size);
    const toReturn = this.#items.pop();
    this.#size--;
    this.#bubbleDown();
    return toReturn.value;
  }

  pushPop(key, value) {
    this.#items[1] = { key, value };
    this.#bubbleDown();
  }

  #bubbleDown() {
    const left = (i) => i * 2;
    const right = (i) => i * 2 + 1;
    let i = 1;
    while (left(i) <= this.#size) {
      // choose larger child
      const child =
        right(i) <= this.#size && this.#items[right(i)].key > this.#items[left(i)].key
          ? right(i)
          : left(i);
      // stop if child is in right place.
      if (this.#items[i].key > this.#items[child].key) {
        break;
      }
      this.#swap(i, child);
      i = child;
    }
  }

  #swap(a, b) {
    [this.#items[a], this.#items[b]] = [this.#items[b], this.#items[a]];
  }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} requiredCapital
 * @return {number}
 */
export const findMaximizedCapital = (k, w, profits, requiredCapital) => {
  let result = w;
  const heap = new MaxHeap();
  const projects = zip(profits, requiredCapital).sort((a, b) => capital(a) - capital(b));
  let projectIndex = 0;
  let remaining = k;
  while (remaining && (projects.length || heap.size())) {
    while (projectIndex < projects.length && capital(projects[projectIndex]) <= result) {
      heap.push(profit(projects[projectIndex]), projects[projectIndex]);
      projectIndex++;
    }
    if (!heap.size) {
      break;
    }
    result += profit(heap.pop());
    remaining--;
  }
  return result;
};
