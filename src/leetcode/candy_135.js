/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 *     Each child must have at least one candy.
 *     Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 */

// const firstPass = (ratings) => {
//   if (ratings.length === 1) {
//     return 1;
//   }

//   const children = ratings.map((rating) => ({
//     rating,
//     candy: 1,
//   }));

//   const getNeighbors = (arr, index) => {
//     if (index === 0) {
//       return [arr[index + 1]];
//     }
//     if (index === arr.length - 1) {
//       return [arr[index - 1]];
//     }
//     return [arr[index - 1], arr[index + 1]];
//   };

//   while (
//     children.some((child, i) =>
//       getNeighbors(children, i).some(
//         (neighbor) => neighbor.rating < child.rating && neighbor.candy >= child.candy
//       )
//     )
//   ) {
//     children.forEach((child, i) => {
//       const lesserNeighbors = getNeighbors(children, i).filter(
//         (neighbor) => neighbor.rating < child.rating
//       );
//       if (lesserNeighbors.length) {
//         child.candy = Math.max(...lesserNeighbors.map((x) => x.candy)) + 1;
//       }
//     });
//   }

//   return children.reduce((total, child) => total + child.candy, 0);
// };

/**
 * @param {number[]} ratings
 * @return {number}
 */
export const candy = (ratings) => {
  const uniqueRatings = [...new Set(ratings)].sort((a, b) => a - b);
  if (uniqueRatings.length === 1) {
    return ratings.length;
  }

  const getNeighbors = (arr, i) => {
    if (i === 0) {
      return [arr[i + 1]];
    }
    if (i === arr.length - 1) {
      return [arr[i - 1]];
    }
    return [arr[i - 1], arr[i + 1]];
  };

  const children = ratings.map((rating) => ({ rating, candy: 1 }));
  for (const rating of uniqueRatings) {
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
      if (children[childIndex].rating !== rating) {
        continue;
      }
      const child = children[childIndex];
      const neighbors = getNeighbors(children, childIndex);
      const lesserChildren = neighbors.filter(
        (neighbor) => neighbor.rating < child.rating && neighbor.candy >= child.candy
      );
      if (!lesserChildren.length) {
        continue;
      }
      child.candy = Math.max(...lesserChildren.map((x) => x.candy)) + 1;
    }
  }
  return children.reduce((total, child) => total + child.candy, 0);
};
