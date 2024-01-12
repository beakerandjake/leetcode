import { suggestedProducts } from '../src/1268.js';
import { arrToStr } from './util.js';

describe('1268. Search Suggestions System', () => {
  [
    [
      ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
      'mouse',
      [
        ['mobile', 'moneypot', 'monitor'],
        ['mobile', 'moneypot', 'monitor'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
      ],
    ],
  ].forEach(([products, search, expected]) => {
    test(`${arrToStr(products)},${search} -> ${arrToStr(expected)}`, () => {
      const result = suggestedProducts(products, search);
      expect(result).toEqual(expected);
    });
  });
});
