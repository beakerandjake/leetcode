/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable lines-between-class-members */
/* eslint-disable max-classes-per-file */

// NO SENTINEL
// class Node {
//   constructor(value, next, previous) {
//     this.value = value;
//     this.next = next === undefined ? null : next;
//     this.previous = previous === undefined ? null : previous;
//   }
// }

// class LinkedList {
//   #head;
//   #tail;

//   constructor() {
//     this.#head = null;
//     this.#tail = null;
//   }

//   get head() {
//     return this.#head;
//   }

//   get tail() {
//     return this.#tail;
//   }

//   pushTail(value) {
//     const newNode = new Node(value);
//     if (!this.#tail) {
//       this.#head = newNode;
//       this.#tail = newNode;
//     } else {
//       newNode.previous = this.#tail;
//       this.#tail.next = newNode;
//       this.#tail = newNode;
//     }
//   }

//   delete(node) {
//     if (node === this.#head) {
//       this.#head = this.#head.next;
//     } else {
//       node.previous.next = node.next;
//     }
//     if (node === this.#tail) {
//       this.#tail = this.#tail.previous;
//     } else {
//       node.next.previous = node.previous;
//     }
//   }
// }

// /**
//  * @param {number} capacity
//  */
// export class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.items = new Map();
//     this.recent = new LinkedList();
//   }

//   /**
//    * @param {number} key
//    * @return {number}
//    */
//   get(key) {
//     const stored = this.items.get(key);

//     if (!stored) {
//       return -1;
//     }

//     this.recent.delete(stored.node);
//     this.recent.pushTail(key);
//     stored.node = this.recent.tail;
//     return stored.value;
//   }

//   /**
//    * @param {number} key
//    * @param {number} value
//    * @return {void}
//    */
//   put(key, value) {
//     if (this.items.has(key)) {
//       const { node } = this.items.get(key);
//       this.recent.delete(node);
//     } else if (this.items.size === this.capacity) {
//       this.items.delete(this.recent.head.value);
//       this.recent.delete(this.recent.head);
//     }
//     this.recent.pushTail(key);
//     this.items.set(key, { value, node: this.recent.tail });
//   }
// }

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.headSentinel = new Node();
    this.tailSentinel = new Node();
    this.headSentinel.next = this.tailSentinel;
    this.tailSentinel.prev = this.headSentinel;
  }

  get head() {
    return this.headSentinel.next;
  }

  push(node) {
    node.prev = this.tailSentinel.prev;
    node.next = this.tailSentinel;
    this.tailSentinel.prev.next = node;
    this.tailSentinel.prev = node;
  }

  delete(node) {
    if (!node.prev?.next) {
      console.log('fuck', node);
    }
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

/**
 * @param {number} capacity
 */
export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.list = new LinkedList();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this.list.delete(node);
    this.list.push(node);
    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      const oldNode = this.map.get(key);
      this.list.delete(oldNode);
    }

    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.list.push(newNode);

    if (this.map.size > this.capacity) {
      const purgeNode = this.list.head;
      this.list.delete(purgeNode);
      this.map.delete(purgeNode.key);
    }
  }
}
