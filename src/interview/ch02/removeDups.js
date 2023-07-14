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

  find(value) {
    let current = this.#head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  }

  addHead(value) {
    const node = new Node(value, this.#head);
    this.#head = node;
  }

  addTail(value) {
    if (!this.#head) {
      this.addHead(value);
      return;
    }

    this.tail.next = new Node(value);
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

  remove(value) {
    if (!this.#head) {
      return false;
    }

    if (this.#head.value === value) {
      this.removeFirst();
      return true;
    }

    let predecessor = this.#head;
    while (predecessor.next && predecessor.next.value !== value) {
      predecessor = predecessor.next;
    }

    if (!predecessor) {
      return false;
    }

    predecessor.next = predecessor.next.next;
    return true;
  }

  removeFirst() {
    if (!this.#head) {
      return;
    }

    this.#head = this.#head.next;
  }

  removeLast() {
    if (!this.#head) {
      return;
    }

    if (!this.#head.next) {
      this.#head = undefined;
      return;
    }

    let current = this.#head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = undefined;
  }
}

/**
 * Remove duplicates from an unsorted linked list.
 */
export const removeDups = (linkedList) => {};
