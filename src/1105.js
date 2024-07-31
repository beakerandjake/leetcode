/**
 * You are given an array books where books[i] = [thicknessi, heighti] indicates
 * the thickness and height of the ith book. You are also given an integer
 * shelfWidth.
 *
 * We want to place these books in order onto bookcase shelves that have a total
 * width shelfWidth.
 *
 * We choose some of the books to place on this shelf such that the sum of their
 * thickness is less than or equal to shelfWidth, then build another level of the
 * shelf of the bookcase so that the total height of the bookcase has increased by
 * the maximum height of the books we just put down. We repeat this process until
 * there are no more books to place.
 *
 * Note that at each step of the above process, the order of the books we place is
 * the same order as the given sequence of books.
 *
 *  * For example, if we have an ordered list of 5 books, we might place the first
 *    and second book onto the first shelf, the third book on the second shelf, and
 *    the fourth and fifth book on the last shelf.
 *
 * Return the minimum possible height that the total bookshelf can be after placing
 * shelves in this manner.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/06/24/shelves.png]
 *
 *
 * Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
 * Output: 6
 * Explanation:
 * The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
 * Notice that book number 2 does not have to be on the first shelf.
 *
 *
 * Example 2:
 *
 *
 * Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
 * Output: 4
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= books.length <= 1000
 *  * 1 <= thicknessi <= shelfWidth <= 1000
 *  * 1 <= heighti <= 1000
 *
 *
 *
 * https://leetcode.com/problems/filling-bookcase-shelves
 */

// returns the thickness of the book.
const thickness = (book) => book[0];

// returns the height of the book.
const height = (book) => book[1];

/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
export const minHeightShelves = (books, shelfWidth) => {
  const memo = [...Array(books.length)].map(() => Array(shelfWidth).fill(null));
  const dp = (i, t, h) => {
    if (i >= books.length) {
      return h;
    }
    if (memo[i][t] == null) {
      let result;
      // have to start new row if past max allowed thickness.
      if (t + thickness(books[i]) > shelfWidth) {
        result = h + dp(i + 1, thickness(books[i]), height(books[i]));
      } else {
        // can add this book to current row or start a new row.
        result = Math.min(
          dp(i + 1, t + thickness(books[i]), Math.max(h, height(books[i]))),
          h + dp(i + 1, thickness(books[i]), height(books[i])),
        );
      }
      memo[i][t] = result;
    }
    return memo[i][t];
  };
  return dp(0, 0, 0);
};
