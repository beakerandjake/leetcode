import { pair, head, tail, display, stringify, gcd } from './lib.js';

const make_rat = (n, d) => {
  const g = gcd(n, d);
  return pair(n / g, d / g);
};

const numer = (x) => head(x);

const denom = (x) => tail(x);

const add_rat = (x, y) => {
  return make_rat(numer(x) * denom(y) + numer(y) * denom(x), denom(x) * denom(y));
};

const sub_rat = (x, y) => {
  return make_rat(numer(x) * denom(y) - numer(y) * denom(x), denom(x) * denom(y));
};

const mul_rat = (x, y) => {
  return make_rat(numer(x) * numer(y), denom(x) * denom(y));
};

const div_rat = (x, y) => {
  return make_rat(numer(x) * denom(y), denom(x) * numer(y));
};

const equal_rat = (x, y) => {
  return numer(x) * denom(y) === numer(y) * denom(x);
};

const print_rat = (x) => {
  return display(`${stringify(numer(x))} / ${stringify(denom(x))}`);
};

const one_half = make_rat(1, 2);
print_rat(one_half);
const one_third = make_rat(1, 3);
print_rat(one_third);
print_rat(add_rat(one_half, one_third));
print_rat(mul_rat(one_half, one_third));
print_rat(add_rat(one_third, one_third));
