import { convert } from 'html-to-text';

/**
 * Convert the raw html content to plain text.
 * @param {string} content - The html to replace.
 */
export const toPlainText = (content) => {
  if (!content) {
    return '';
  }

  // convert and then ensure nbsp is replaced with standard space.
  return convert(content).replace(/\u00a0/g, ' ');
};
