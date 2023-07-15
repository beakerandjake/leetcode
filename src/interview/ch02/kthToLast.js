const elegant = (list, k) => {
  const walkNodes = (current, runner) =>
    runner ? walkNodes(current.next, runner.next) : current;

  const advanceNode = (node, steps) =>
    steps ? advanceNode(node.next, steps - 1) : node;

  return walkNodes(list.head, advanceNode(list.head, k + 1));
};

const better = (list, k) => {
  const run = (current, runner, runnerOffset) => {
    // tail has been reached.
    if (!runner.next) {
      // if current is exactly k away from tail we found the node, otherwise no solution.
      return runnerOffset === k ? current : undefined;
    }

    // once runner and current are k units away move each one node at a time.
    if (runnerOffset === k) {
      return run(current.next, runner.next, runnerOffset);
    }

    // move runner until it's k nodes away from the current.
    return run(current, runner.next, runnerOffset + 1);
  };

  if (k === 0) {
    return list.tail;
  }

  if (!list.head.next) {
    return undefined;
  }

  return run(list.head, list.head.next, 1);
};

const simple = (list, k) => {
  const length = list.count;

  if (k >= length) {
    return undefined;
  }

  let current = list.head;
  let nodeCount = 1;
  while (nodeCount++ < length - k) {
    current = current.next;
  }
  return current;
};

export const kthToLast = (list, k) => {
  if (!list || !list.head || k < 0) {
    return undefined;
  }

  return elegant(list, k);
};
