export const display = (x) => {
  console.log(x);
  return x;
};

export const stringify = (x) => `${x}`;

export const pair = (x, y) => {
  const dispatch = (m) => {
    if (m === 0) {
      return x;
    }
    if (m === 1) {
      return y;
    }
    throw new Error(`argument: ${m} not 0 or 1 -- pair`);
  };
  return dispatch;
};

export const head = (z) => z(0);

export const tail = (z) => z(1);

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
