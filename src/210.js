/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 *  For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
 */

const getCourseMap = (courses) =>
  courses.reduce(
    (acc, [course, prerequisite]) =>
      acc.set(course, (acc.get(course) || new Set()).add(prerequisite)),
    new Map()
  );

const fillArray = (count) => [...Array(count)].map((_, i) => i);

const getBaseCourses = (numberOfCourses, courseMap) =>
  fillArray(numberOfCourses).filter((x) => !courseMap.has(x));

const canTakeCourse = (prerequisites, taken) => {
  for (const prerequisite of prerequisites) {
    if (!taken.has(prerequisite)) {
      return false;
    }
  }
  return true;
};

const filterAvailableCourses = (taken, courseMap) => {
  const toReturn = [];
  for (const [course, prerequisites] of courseMap.entries()) {
    if (canTakeCourse(prerequisites, taken)) {
      toReturn.push(course);
    }
  }
  return toReturn;
};

/**
 * @param {number} numCourses
 * @param {number[][]} courses
 * @return {number[]}
 */
export const findOrder = (numCourses, courses) => {
  if (!courses.length) {
    return fillArray(numCourses);
  }
  const courseMap = getCourseMap(courses);
  const taken = new Set(getBaseCourses(numCourses, courseMap));

  while (taken.size < numCourses && courseMap.size > 0) {
    const newCourses = filterAvailableCourses(taken, courseMap);
    if (!newCourses.length) {
      break;
    }
    newCourses.forEach((course) => {
      taken.add(course);
      courseMap.delete(course);
    });
  }

  return taken.size === numCourses ? [...taken] : [];
};
