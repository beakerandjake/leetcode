/**
 * The median is the middle value in an ordered integer list. If the size of the
 * list is even, there is no middle value, and the median is the mean of the two
 * middle values.
 *
 *  * For example, for arr = [2,3,4], the median is 3.
 *  * For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
 *
 * Implement the MedianFinder class:
 *
 *  * MedianFinder() initializes the MedianFinder object.
 *  * void addNum(int num) adds the integer num from the data stream to the data
 *    structure.
 *  * double findMedian() returns the median of all elements so far. Answers within
 *    10-5 of the actual answer will be accepted.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 * [[], [1], [2], [], [3], []]
 * Output
 * [null, null, null, 1.5, null, 2.0]
 *
 * Explanation
 * MedianFinder medianFinder = new MedianFinder();
 * medianFinder.addNum(1);    // arr = [1]
 * medianFinder.addNum(2);    // arr = [1, 2]
 * medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
 * medianFinder.addNum(3);    // arr[1, 2, 3]
 * medianFinder.findMedian(); // return 2.0
 *
 *
 *
 *
 * Constraints:
 *
 *  * -105 <= num <= 105
 *  * There will be at least one element in the data structure before calling
 *    findMedian.
 *  * At most 5 * 104 calls will be made to addNum and findMedian.
 *
 *
 *
 * Follow up:
 *
 *  * If all integer numbers from the stream are in the range [0, 100], how would
 *    you optimize your solution?
 *  * If 99% of all integer numbers from the stream are in the range [0, 100], how
 *    would you optimize your solution?
 *
 *
 *
 * https://leetcode.com/problems/find-median-from-data-stream
 */

// =============================================================
// USING BIT VECTOR
// =============================================================

// const offset = 10 ** 5;
// const toIndex = (num) => num + offset;
// const toNum = (index) => index - offset;

// export class MedianFinder {
//   #lookup = Array(offset * 2 + 1).fill(0);
//   #itemCount = 0;

//   addNum(num) {
//     const index = toIndex(num);
//     this.#lookup[index] += 1;
//     this.#itemCount++;
//   }

//   #numAtIndex(index) {
//     let nums = -1;
//     let current = 0;
//     while (nums !== index) {
//       while (this.#lookup[current] === 0) {
//         current++;
//       }
//       if (nums + this.#lookup[current] >= index) {
//         break;
//       }
//       nums += this.#lookup[current];
//       current++;
//     }
//     return toNum(current);
//   }

//   findMedian() {
//     if (this.#itemCount % 2 !== 0) {
//       return this.#numAtIndex(Math.floor(this.#itemCount / 2));
//     }

//     const m = this.#itemCount / 2;
//     const right = this.#numAtIndex(m);
//     const left = this.#numAtIndex(m - 1);
//     return (left + right) / 2;
//   }
// }

// =============================================================
// USING BINARY SEARCH
// =============================================================

// export class MedianFinder {
//   #numbers = [];

//   #findInsertIndex(num) {
//     let low = 0;
//     let high = this.#numbers.length - 1;
//     while (low <= high) {
//       const m = Math.floor(low + (high - low) / 2);
//       if (this.#numbers[m] <= num) {
//         low = m + 1;
//       } else {
//         high = m - 1;
//       }
//     }
//     return low;
//   }

//   addNum(num) {
//     if (!this.#numbers.length) {
//       this.#numbers.push(num);
//       return;
//     }
//     this.#numbers.splice(this.#findInsertIndex(num), 0, num);
//   }

//   findMedian() {
//     if (this.#numbers.length % 2 !== 0) {
//       return this.#numbers[Math.floor(this.#numbers.length / 2)];
//     }
//     const m = Math.floor(this.#numbers.length / 2);
//     return (this.#numbers[m - 1] + this.#numbers[m]) / 2;
//   }
// }

class Heap {
  #items = [];
  #size = 0;
  #compare;

  constructor(isMax) {
    this.#compare = isMax ? (a, b) => a > b : (a, b) => a < b;
  }

  get size() {
    return this.#size;
  }

  push(value) {
    this.#size++;
    this.#items[this.#size] = value;
    this.#bubbleUp();
  }

  peek() {
    return this.#items[1];
  }

  #bubbleUp() {
    const parent = (i) => Math.floor(i / 2);

    let i = this.#size;
    while (i > 1 && this.#compare(this.#items[i], this.#items[parent(i)])) {
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
    return toReturn;
  }

  #bubbleDown() {
    const left = (i) => i * 2;
    const right = (i) => i * 2 + 1;
    let i = 1;
    while (left(i) <= this.#size) {
      // choose higher priority child
      const child =
        right(i) <= this.#size &&
        this.#compare(this.#items[right(i)], this.#items[left(i)])
          ? right(i)
          : left(i);
      // stop if child is in right place.
      if (this.#compare(this.#items[i], this.#items[child])) {
        break;
      }
      this.#swap(i, child);
      i = child;
    }
  }

  #swap(a, b) {
    [this.#items[a], this.#items[b]] = [this.#items[b], this.#items[a]];
  }

  toArray() {
    const toReturn = [];
    for (let i = 1; i < this.#items.length; i++) {
      toReturn.push(this.#items[i]);
    }
    return toReturn;
  }
}

export class MedianFinder {
  #left = new Heap(true);
  #right = new Heap(false);

  get #count() {
    return this.#left.size + this.#right.size;
  }

  addNum(num) {
    if (this.#count % 2 === 0) {
      this.#right.push(num, num);
      this.#left.push(this.#right.pop());
    } else {
      this.#left.push(num, num);
      this.#right.push(this.#left.pop());
    }
  }

  findMedian() {
    return this.#count % 2 !== 0
      ? this.#left.peek()
      : (this.#left.peek() + this.#right.peek()) / 2;
  }
}
