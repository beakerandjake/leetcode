/**
 * Wraps the function with a log group.
 */
export const logGroup = (name, fn) => {
  console.group(name);
  fn();
  console.groupEnd();
};
