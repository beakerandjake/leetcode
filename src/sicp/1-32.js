const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const identity = (x) => x;

const inc = (x) => x + 1;

const product = (term, a, next, b) => {
  return a > b ? 0 : term(a) + product(term, next(a), next, b);
};

const accumulate_recursive = (combiner, null_value, term, a, next, b) => {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate_recursive(combiner, null_value, term, next(a), next, b)
      );
};

const accumulate_iterative = (combiner, null_value, term, a, next, b) => {
  const iter = (a, result) => {
    return a > b ? result : iter(next(a), combiner(term(a), result));
  };
  return iter(a, null_value);
};

export const sum_recursive = (a, b) => {
  return accumulate_recursive(add, 0, identity, a, inc, b);
};

export const sum_iterative = (a, b) => {
  return accumulate_iterative(add, 0, identity, a, inc, b);
};

export const product_recursive = (a, b) => {
  return accumulate_recursive(multiply, 1, identity, a, inc, b);
};

export const product_iterative = (a, b) => {
  return accumulate_iterative(multiply, 1, identity, a, inc, b);
};
