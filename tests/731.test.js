import { MyCalendarTwo } from '../src/731.js';
import { generateTestName } from './util.js';

describe('731. My Calendar II', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(MyCalendarTwo, ...args), () => {
      const result = MyCalendarTwo();
      expect(result).toBe(expected);
    });
  });
});
