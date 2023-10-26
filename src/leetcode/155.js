/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 export class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (!this.min.length || val <= this.min.at(-1)) {
      this.min.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const popped = this.stack.pop();
    if (this.min.length && this.min.at(-1) === popped) {
      this.min.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min.at(-1);
  }
}
