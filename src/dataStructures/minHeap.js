// export class MinHeap {
//   constructor() {}
//   get size() {}
//   findMin() {}
//   insert() {}
//   deleteMin() {}
// }

const parent = (i) => Math.floor(i / 2);
const left = (i) => i * 2;
const right = (i) => i * 2 + 1;

export class MinHeap {
  #items = [];
  #size = 0;

  get size() {
    return this.#size;
  }

  findMin() {
    return this.#items[1];
  }

  insert(value) {
    this.#size++;
    this.#items[this.#size] = value;
    this.#bubbleUp();
  }

  #bubbleUp() {
    let i = this.#size;
    while (i > 1 && this.#items[i] < this.#items[parent(i)]) {
      this.#swap(parent(i), i);
      i = parent(i);
    }
  }

  deleteMin() {
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
    let i = 1;
    while (left(i) <= this.#size) {
      const child =
        right(i) <= this.size && this.#items[right(i)] < this.#items[left(i)]
          ? right(i)
          : left(i);
      if (this.#items[i] < this.#items[child]) {
        break;
      }
      this.#swap(i, child);
      i = child;
    }
  }

  #swap(lhs, rhs) {
    [this.#items[lhs], this.#items[rhs]] = [this.#items[rhs], this.#items[lhs]];
  }
}
