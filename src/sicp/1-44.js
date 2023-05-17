export const smooth = (fn, dx = 0.00001) => {
  return (x) => (fn(x - dx) + fn(x) + fn(x + dx)) / 3;
};

const compose = (f, g) => (x) => f(g(x));

const repeated = (fn, times) => (times === 1 ? fn : compose(repeated(fn, times - 1), fn));

export const n_fold_smooth = (fn, times) => {
  return repeated(smooth, times)(fn);
};
