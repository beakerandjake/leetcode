/**
 * Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if
 * IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.
 *
 * A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and
 * xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0"
 * are valid IPv4 addresses while "192.168.01.1", "192.168.1.00", and "192.168@1.1"
 * are invalid IPv4 addresses.
 *
 * A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
 *
 *  * 1 <= xi.length <= 4
 *  * xi is a hexadecimal string which may contain digits, lowercase English letter
 *    ('a' to 'f') and upper-case English letters ('A' to 'F').
 *  * Leading zeros are allowed in xi.
 *
 * For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and
 * "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while
 * "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334"
 * are invalid IPv6 addresses.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: queryIP = "172.16.254.1"
 * Output: "IPv4"
 * Explanation: This is a valid IPv4 address, return "IPv4".
 *
 *
 * Example 2:
 *
 *
 * Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * Output: "IPv6"
 * Explanation: This is a valid IPv6 address, return "IPv6".
 *
 *
 * Example 3:
 *
 *
 * Input: queryIP = "256.256.256.256"
 * Output: "Neither"
 * Explanation: This is neither a IPv4 address nor a IPv6 address.
 *
 *
 *
 *
 * Constraints:
 *
 *  * queryIP consists only of English letters, digits and the characters '.' and
 *    ':'.
 *
 *
 *
 * https://leetcode.com/problems/validate-ip-address
 */

const isNumeric = (str) => /^\d+$/.test(str);

const validOctet = (octet) => {
  // need 1 - 4 characters.
  if (octet.length < 1 || octet.length > 4) {
    return false;
  }
  // each character must be a digit
  if (!isNumeric(octet)) {
    return false;
  }
  // cannot have leading zeros
  if (octet.length > 1 && octet[0] === '0') {
    return false;
  }
  // must be below 255
  return Number(octet) < 256;
};

const validIpv4 = (ip) => {
  const octets = ip.split('.');
  return octets.length === 4 && octets.every(validOctet);
};

const isHex = (str) => /^[a-fA-F0-9]+$/.test(str);

const validHextet = (hextet) => hextet.length >= 1 && hextet.length <= 4 && isHex(hextet);

const validIpv6 = (ip) => {
  const groups = ip.split(':');
  return groups.length === 8 && groups.every(validHextet);
};

const getDelimiter = (ip) => ip.match(/[:.]/)?.at(0) || null;

const parseIpType = (() => {
  const delimiterMap = new Map([
    ['.', [validIpv4, 4]],
    [':', [validIpv6, 6]],
  ]);
  return (ip) => {
    const delimiter = getDelimiter(ip);
    if (!delimiterMap.has(delimiter)) {
      return 0;
    }
    const [parseFn, typeKey] = delimiterMap.get(delimiter);
    return parseFn(ip) ? typeKey : 0;
  };
})();

/**
 * @param {string} queryIP
 * @return {string}
 */
export const validIPAddress = (queryIP) => {
  switch (parseIpType(queryIP)) {
    case 4:
      return 'IPv4';
    case 6:
      return 'IPv6';
    default:
      return 'Neither';
  }
};
