import { restoreIpAddresses } from '../src/93.js';
import { generateTestName } from './util.js';

describe('93. Restore IP Addresses', () => {
  [
    ['25525511135', ['255.255.11.135', '255.255.111.35']],
    ['0000', ['0.0.0.0']],
    ['101023', ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(restoreIpAddresses, ...args), () => {
      const result = restoreIpAddresses(s);
      expect(result).toEqual(expected);
    });
  });
});
