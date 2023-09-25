/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 *     Each child must have at least one candy.
 *     Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 */

// const uniqueSorted = (ratings) => {
//   const uniqueRatings = [...new Set(ratings)].sort((a, b) => a - b);
//   if (uniqueRatings.length === 1) {
//     return ratings.length;
//   }

//   const getNeighbors = (arr, i) => {
//     if (i === 0) {
//       return [arr[i + 1]];
//     }
//     if (i === arr.length - 1) {
//       return [arr[i - 1]];
//     }
//     return [arr[i - 1], arr[i + 1]];
//   };

//   const children = ratings.map((rating) => ({ rating, candy: 1 }));
//   for (const rating of uniqueRatings) {
//     for (let childIndex = 0; childIndex < children.length; childIndex++) {
//       if (children[childIndex].rating !== rating) {
//         continue;
//       }
//       const child = children[childIndex];
//       const neighbors = getNeighbors(children, childIndex);
//       const lesserChildren = neighbors.filter(
//         (neighbor) => neighbor.rating < child.rating && neighbor.candy >= child.candy
//       );
//       if (!lesserChildren.length) {
//         continue;
//       }
//       child.candy = Math.max(...lesserChildren.map((x) => x.candy)) + 1;
//     }
//   }
//   return children.reduce((total, child) => total + child.candy, 0);
// };

// const simpleIterative = (ratings) => {
//   if (ratings.length === 1) {
//     return 1;
//   }

//   let settled = false;
//   const candies = Array(ratings.length).fill(1);
//   while (!settled) {
//     settled = true;
//     for (let i = 0; i < candies.length; i++) {
//       if (i > 0 && ratings[i - 1] < ratings[i] && candies[i - 1] >= candies[i]) {
//         settled = false;
//         candies[i] += 1;
//       }
//       if (
//         i < ratings.length - 1 &&
//         ratings[i + 1] < ratings[i] &&
//         candies[i + 1] >= candies[i]
//       ) {
//         settled = false;
//         candies[i] += 1;
//       }
//     }
//   }
//   return candies.reduce((acc, x) => acc + x, 0);
// };

/**
 * @param {number[]} ratings
 * @return {number}
 */
export const candy = (ratings) => {
  if (ratings.length === 1) {
    return 1;
  }
  const lookRight = Array(ratings.length).fill(1);
  for (let i = 1; i < lookRight.length; i++) {
    if (ratings[i] > ratings[i - 1] && lookRight[i] <= lookRight[i - 1]) {
      lookRight[i] = lookRight[i - 1] + 1;
    }
  }
  const lookLeft = Array(ratings.length).fill(1);
  for (let i = ratings.length - 1; i--; ) {
    if (ratings[i] > ratings[i + 1] && lookLeft[i] <= lookLeft[i + 1]) {
      lookLeft[i] = lookLeft[i + 1] + 1;
    }
  }
  return ratings.reduce((acc, _, i) => acc + Math.max(lookRight[i], lookLeft[i]), 0);
};
