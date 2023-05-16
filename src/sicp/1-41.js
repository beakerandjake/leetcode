const double = (f) => (x) => f(f(x));

const inc = (x) => x + 1;

export const exercise = (n) => double(double(double))(inc)(n);
