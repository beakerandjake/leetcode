const identity = (x) => x;

const inc = (x) => x + 1;

export const product_recursive = (term, a, next, b) => {
  return a > b ? 1 : term(a) * product_recursive(term, next(a), next, b);
};

const product_iterative_impl = (term, a, next, b, result) => {
  return a > b
    ? result
    : product_iterative_impl(term, next(a), next, b, term(a) * result);
};

export const product_iterative = (term, a, next, b) => {
  return product_iterative_impl(term, a, next, b, 1);
};

export const factorial_iterative = (n) => {
  return product_iterative(identity, 1, inc, n);
};

export const factorial_recursive = (n) => {
  return product_recursive(identity, 1, inc, n);
};
