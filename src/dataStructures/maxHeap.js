// export class MaxHeap {
//   get size() {}
//   findMax() {}
//   insert() {}
//   deleteMax() {}
// }

export class MaxHeap {
  #size = 0;
  #items = [];

  get size() {
    return this.#size;
  }

  findMax() {
    return this.#items[1];
  }

  insert(value) {
    this.#size++;
    this.#items[this.#size] = value;
    this.#bubbleUp();
  }

  #bubbleUp() {
    const parent = (i) => Math.floor(i / 2);
    let i = this.#size;
    while (i > 1 && this.#items[i] > this.#items[parent(i)]) {
      this.#swap(i, parent(i));
      i = parent(i);
    }
  }

  deleteMax() {
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
      // choose larger child
      const child =
        right(i) <= this.#size && this.#items[right(i)] > this.#items[left(i)]
          ? right(i)
          : left(i);
      // stop if node is now at correct place.
      if (this.#items[i] > this.#items[child]) {
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
