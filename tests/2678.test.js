import { countSeniors } from '../src/2678.js';
import { generateTestName } from './util.js';

describe('2678. Number of Senior Citizens', () => {
  [
    [['7868190130M7522', '5303914400F9211', '9273338290F4010'], 2],
    [['1313579440F2036', '2921522980M5644'], 0],
  ].forEach((args) => {
    const [details, expected] = args;
    test(generateTestName(countSeniors, ...args), () => {
      const result = countSeniors(details);
      expect(result).toBe(expected);
    });
  });
});
