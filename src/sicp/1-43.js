const compose = (f, g) => (x) => f(g(x));

const repeated = (fn, times) => (times === 1 ? fn : compose(repeated(fn, times - 1), fn));

const square = (x) => x * x;

export const exercise = (n, times) => repeated(square, times)(n);
