import { validIPAddress } from '../src/468.js';
import { generateTestName } from './util.js';

describe('468. Validate IP Address', () => {
  [
    ['172.16.254.1', 'IPv4'],
    ['2001:0db8:85a3:0:0:8A2E:0370:7334', 'IPv6'],
    ['256.256.256.256', 'Neither'],
  ].forEach((args) => {
    const [queryIP, expected] = args;
    test(generateTestName(validIPAddress, ...args), () => {
      const result = validIPAddress(queryIP);
      expect(result).toBe(expected);
    });
  });
});
