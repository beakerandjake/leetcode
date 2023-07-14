/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

export class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

export class LinkedList {
  #head;

  constructor(head) {
    this.#head = head;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    let current = this.#head;
    while (current?.next) {
      current = current.next;
    }
    return current;
  }

  get count() {
    let count = 0;
    let current = this.#head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  find(value) {
    let current = this.#head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  }

  contains(value) {
    let current = this.#head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  addHead(value) {
    const node = new Node(value, this.#head);
    this.#head = node;
  }

  addTail(value) {
    const node = new Node(value);
    const tail = this.tail();
    if (!tail) {
      this.addHead(value);
    } else {
      tail.next = node;
    }
  }

  addAfter(value, node) {
    const newNode = new Node(value, node.next);
    node.next = newNode;
  }

  addBefore(value, node) {
    let predecessor = this.head;
    while (predecessor?.next !== node) {
      predecessor = predecessor.next;
    }
    if (!predecessor) {
      throw new Error('Could not find predecessor node');
    }
    const newNode = new Node(value, node);
    predecessor.next = newNode;
  }


  // remove - remove first node with value
  // removeFirst - remove head
  // removeLast - remove tail

  forEach(fn) {
    let current = this.head;
    while (current !== null) {
      fn(current.value);
      current = current.next;
    }
  }
}

/**
 * Remove duplicates from an unsorted linked list.
 */
export const removeDups = (linkedList) => {};
