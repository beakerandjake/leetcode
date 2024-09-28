/**
 * Design your implementation of the circular double-ended queue (deque).
 *
 * Implement the MyCircularDeque class:
 *
 *  * MyCircularDeque(int k) Initializes the deque with a maximum size of k.
 *  * boolean insertFront() Adds an item at the front of Deque. Returns true if the
 *    operation is successful, or false otherwise.
 *  * boolean insertLast() Adds an item at the rear of Deque. Returns true if the
 *    operation is successful, or false otherwise.
 *  * boolean deleteFront() Deletes an item from the front of Deque. Returns true
 *    if the operation is successful, or false otherwise.
 *  * boolean deleteLast() Deletes an item from the rear of Deque. Returns true if
 *    the operation is successful, or false otherwise.
 *  * int getFront() Returns the front item from the Deque. Returns -1 if the deque
 *    is empty.
 *  * int getRear() Returns the last item from Deque. Returns -1 if the deque is
 *    empty.
 *  * boolean isEmpty() Returns true if the deque is empty, or false otherwise.
 *  * boolean isFull() Returns true if the deque is full, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
 * [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * Output
 * [null, true, true, true, false, 2, true, true, true, 4]
 *
 * Explanation
 * MyCircularDeque myCircularDeque = new MyCircularDeque(3);
 * myCircularDeque.insertLast(1);  // return True
 * myCircularDeque.insertLast(2);  // return True
 * myCircularDeque.insertFront(3); // return True
 * myCircularDeque.insertFront(4); // return False, the queue is full.
 * myCircularDeque.getRear();      // return 2
 * myCircularDeque.isFull();       // return True
 * myCircularDeque.deleteLast();   // return True
 * myCircularDeque.insertFront(4); // return True
 * myCircularDeque.getFront();     // return 4
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= k <= 1000
 *  * 0 <= value <= 1000
 *  * At most 2000 calls will be made to insertFront, insertLast, deleteFront,
 *    deleteLast, getFront, getRear, isEmpty, isFull.
 *
 *
 *
 * https://leetcode.com/problems/design-circular-deque
 */

// solving the fun way

const cons = (a, b) => (dispatch) => {
  // eslint-disable-next-line no-param-reassign
  const setA = (x) => (a = x);
  // eslint-disable-next-line no-param-reassign
  const setB = (x) => (b = x);
  switch (dispatch) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    case 'setCar':
      return setA;
    case 'setCdr':
      return setB;
    default:
      throw new Error('Unknown dispatch', dispatch);
  }
};
const car = (x) => x('car');
const cdr = (x) => x('cdr');
const setCar = (x, value) => x('setCar')(value);
const setCdr = (x, value) => x('setCdr')(value);

const makeNode = (value, prev, next) => cons(value, cons(prev, cons(next, null)));
const nodeValue = (n) => car(n);
const nodePrevious = (n) => car(cdr(n));
const setNodePrev = (n, value) => setCar(cdr(n), value);
const nodeNext = (n) => car(cdr(cdr(n)));
const setNodeNext = (n, value) => setCar(cdr(cdr(n)), value);

export class MyCircularDeque {
  #maxSize;
  #headAndTail = cons(null, null);
  #size = 0;

  /**
   * @param {number} k
   */
  constructor(k) {
    this.#maxSize = k;
  }

  get #head() {
    return car(this.#headAndTail);
  }

  set #head(value) {
    setCar(this.#headAndTail, value);
  }

  get #tail() {
    return cdr(this.#headAndTail);
  }

  set #tail(value) {
    setCdr(this.#headAndTail, value);
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  insertFront(value) {
    console.log('insert front', value, 'size', this.#size, 'isFull', this.isFull());
    if (this.isFull()) {
      return false;
    }
    const toInsert = makeNode(value, null, null);
    if (this.isEmpty()) {
      this.#head = toInsert;
      this.#tail = toInsert;
    } else {
      setNodeNext(toInsert, this.#head);
      setNodePrev(this.#head, toInsert);
      this.#head = toInsert;
    }
    this.#size++;
    return true;
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  insertLast(value) {
    if (this.isFull()) {
      return false;
    }
    const toInsert = makeNode(value, null, null);
    if (this.isEmpty()) {
      this.#head = toInsert;
      this.#tail = toInsert;
    } else {
      setNodeNext(this.#tail, toInsert);
      setNodePrev(toInsert, this.#tail);
      this.#tail = toInsert;
    }
    this.#size++;
    return true;
  }

  /**
   * @return {boolean}
   */
  deleteFront() {
    if (this.isEmpty()) {
      return false;
    }
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#head = nodeNext(this.#head);
      setNodePrev(this.#head, null);
    }
    this.#size--;
    return true;
  }

  /**
   * @return {boolean}
   */
  deleteLast() {
    if (this.isEmpty()) {
      return false;
    }
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#tail = nodePrevious(this.#tail);
      setNodeNext(this.#tail, null);
    }
    this.#size--;
    return true;
  }

  /**
   * @return {number}
   */
  getFront() {
    return this.#head ? nodeValue(this.#head) : -1;
  }

  /**
   * @return {number}
   */
  getRear() {
    return this.#tail ? nodeValue(this.#tail) : -1;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.#size === this.#maxSize;
  }

  *values() {
    if (this.isEmpty()) {
      return;
    }
    let head = this.#head;
    while (head) {
      yield nodeValue(head);
      head = nodeNext(head);
    }
  }
}
