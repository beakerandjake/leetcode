/**
 * You want to schedule a list of jobs in d days.
 * Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).
 *
 * You have to finish at least one task every day.
 * The difficulty of a job schedule is the sum of difficulties of each day of the d days.
 * The difficulty of a day is the maximum difficulty of a job done on that day.
 *
 * You are given an integer array jobDifficulty and an integer d.
 * The difficulty of the ith job is jobDifficulty[i].
 *
 * Return the minimum difficulty of a job schedule.
 * If you cannot find a schedule for the jobs return -1.
 */

const getMaxLeft = (jobs) => {
  const toReturn = [jobs[0]];
  for (let i = 1; i < jobs.length; i++) {
    toReturn.push(jobs[i] > toReturn[i - 1] ? jobs[i] : toReturn[i - 1]);
  }
  return toReturn;
};

const getMaxRight = (jobs) => {
  const toReturn = [...jobs];
  for (let i = jobs.length - 2; i >= 0; i--) {
    toReturn[i] = jobs[i] > toReturn[i + 1] ? jobs[i] : toReturn[i + 1];
  }
  return toReturn;
};

const topDown = (jobs, days) => {
  if (days > jobs.length) {
    return -1;
  }
  const memo = new Map();
  const maxLeft = getMaxLeft(jobs);
  const maxRight = getMaxRight(jobs);
  const recursive = (day, jobIndex) => {
    const hash = `${day}_${jobIndex}`;
    if (memo.has(hash)) {
      return memo.get(hash);
    }
    if (day === days) {
      memo.set(hash, Math.max(...jobs.slice(jobIndex)));
    } else {
      const jobLimit = jobs.length - (days - day);
      let best = Number.MAX_SAFE_INTEGER;
      for (let i = jobIndex; i < jobLimit; i++) {
        const today = Math.max(...jobs.slice(jobIndex, i + 1));
        best = Math.min(best, today + recursive(day + 1, i + 1));
      }
      memo.set(hash, best);
    }

    return memo.get(hash);
  };

  return recursive(1, 0);
};

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
export const minDifficulty = topDown;
