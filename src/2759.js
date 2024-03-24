/**
 * Given a string str, return parsed JSON parsedStr. You may assume the str is a valid JSON string hence it only includes strings, numbers, arrays, objects, booleans, and null. str will not include invisible characters and escape characters.
 *
 * Please solve it without using the built-in JSON.parse method.
 *
 *
 * Example 1:
 *
 * Input: str = '{"a":2,"b":[1,2,3]}'
 * Output: {"a":2,"b":[1,2,3]}
 * Explanation: Returns the object represented by the JSON string.
 *
 * Example 2:
 *
 * Input: str = 'true'
 * Output: true
 * Explanation: Primitive types are valid JSON.
 *
 * Example 3:
 *
 * Input: str = '[1,5,"false",{"a":2}]'
 * Output: [1,5,"false",{"a":2}]
 * Explanation: Returns the array represented by the JSON string.
 *
 *
 *
 * Constraints:
 *
 *     str is a valid JSON string
 *     1 <= str.length <= 105
 *
 * https://leetcode.com/problems/convert-json-string-to-object/description/
 */

/**
 * @param {string} str
 * @return {null|boolean|number|string|Array|Object}
 */
export const jsonParse = (str) => {
  let index = 0;

  // assets the current char is equal to the value and consumes the char.
  const assertChar = (value) => {
    if (str[index] !== value) {
      throw new Error(`expected value:${value} at index:${index} but got: ${str[index]}`);
    }
    index++;
  };

  // returns true if the current char is the start of a string value.
  const isString = () => str[index] === '"';

  // consumes opening and closing " and all characters in between.
  const parseString = () => {
    // consume opening "
    index++;
    const start = index;
    while (index < str.length && str[index] !== '"') {
      index++;
    }
    const end = index;
    // consume closing "
    index++;
    return str.slice(start, end);
  };

  // returns true if the current char is the start of a boolean value.
  const isBoolean = () => str[index] === 't' || str[index] === 'f';

  // consumes 'true' or 'false' from the string
  const parseBoolean = () => {
    if (str.startsWith('true', index)) {
      // consume 'true' from the string
      index += 4;
      return true;
    }
    if (str.startsWith('false', index)) {
      // consume 'false' from the string.
      index += 5;
      return false;
    }
    throw new Error(`failed to parse boolean at index: ${index}`);
  };

  // returns true if the current char is the start of a null value.
  const isNull = () => str[index] === 'n';

  // consumes 'null' from the string and advances the index.
  const parseNull = () => {
    if (!str.startsWith('null', index)) {
      throw new Error(`failed to parse null at index: ${index}`);
    }
    // consume current + next three chars (n u l l)
    index += 4;
    return null;
  };

  // returns true if the current char is the start of a number value.
  const isNumber = () => str[index] === '-' || /\d/.test(str[index]);

  // consumes and returns the number from the string.
  const parseNumber = () => {
    const start = index;
    // consume the negative sign (if exists)
    if (str[index] === '-') {
      index++;
    }
    while (index < str.length && /[\d.]/.test(str[index])) {
      index++;
    }
    const numberStr = str.slice(start, index);
    return numberStr.includes('.')
      ? Number.parseFloat(numberStr)
      : Number.parseInt(numberStr, 10);
  };

  // returns true if the current char is the start of an object value.
  const isObject = () => str[index] === '{';

  // consumes all contents between the objects opening and closing brackets and returns the object.
  const parseObject = () => {
    // consume opening {
    index++;
    const parsed = {};
    while (index < str.length && str[index] !== '}') {
      const key = parseString();
      assertChar(':');
      const value = parseValue();
      parsed[key] = value;
      // consume the comma and move on to the next field (if exists).
      if (str[index] === ',') {
        index++;
      }
    }
    // consume closing }
    index++;
    return parsed;
  };

  // returns true if the current char is the start of an array value.
  const isArray = () => str[index] === '[';

  // consumes all contents between the array opening and closing brackets and returns the array.
  const parseArray = () => {
    // consume opening [
    index++;
    const parsed = [];
    while (index < str.length && str[index] !== ']') {
      const value = parseValue();
      parsed.push(value);
      if (str[index] === ',') {
        index++;
      }
    }
    // consume closing ]
    index++;
    return parsed;
  };

  // maps a parser predicate to a parser function.
  const parsers = new Map([
    [isObject, parseObject],
    [isArray, parseArray],
    [isString, parseString],
    [isNull, parseNull],
    [isBoolean, parseBoolean],
    [isNumber, parseNumber],
  ]);

  const parseValue = () => {
    for (const [predicate, parse] of parsers.entries()) {
      if (predicate()) {
        return parse();
      }
    }
    throw new Error(`failed to find parser for char: ${str[index]} at index: ${index}`);
  };

  return parseValue();
};
