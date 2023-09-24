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

// const maxFrom = (jobs, index) => {
//   let max = jobs[index];
//   for (let i = index + 1; i < jobs.length; i++) {
//     if (jobs[i] > max) {
//       max = jobs[i];
//     }
//   }
//   return max;
// };

const getMaxFrom = (jobs) => {
  const toReturn = [...jobs];
  for (let i = jobs.length - 2; i >= 0; i--) {
    toReturn[i] = Math.max(toReturn[i], toReturn[i + 1]);
  }
  return toReturn;
};

const topDown = (jobs, days) => {
  if (days > jobs.length) {
    return -1;
  }
  const memo = new Map();
  const maxFrom = getMaxFrom(jobs);
  const recursive = (day, jobIndex) => {
    if (day === days) {
      return maxFrom[jobIndex];
    }
    const hash = `${day}_${jobIndex}`;
    if (!memo.has(hash)) {
      const maxJob = jobs.length - (days - day); // exclusive
      let hardestJobSeen = 0;
      let easiestSchedule = Number.MAX_SAFE_INTEGER;
      for (let i = jobIndex; i < maxJob; i++) {
        if (jobs[i] > hardestJobSeen) {
          hardestJobSeen = jobs[i];
        }
        const schedule = hardestJobSeen + recursive(day + 1, i + 1);
        if (schedule < easiestSchedule) {
          easiestSchedule = schedule;
        }
      }
      memo.set(hash, easiestSchedule);
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
