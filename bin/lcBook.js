import { exit } from 'node:process';
import { readFile, readdir } from 'node:fs/promises';

const LC_DIR = 'src/leetcode';
const INPUT_FILE = 'bin/ctci-to-lc.txt';

const getBookMapping = async () => {
  const raw = await readFile(INPUT_FILE, 'utf8');
  return raw.split('\n');
};

const getCompletedProblems = async () => {
  const fileNames = await readdir(LC_DIR);
  return fileNames.map((fileName) => fileName.replace('.js', ''));
};

const getBookProblems = (mapping) =>
  mapping.flatMap((line) => {
    const [_, lc] = line.split(' = ');
    return lc ? lc.split(',') : [];
  });

const union = (a, b) => {
  const aSet = new Set(a);
  return b.filter((x) => aSet.has(x));
};

const main = async () => {
  const bookMapping = await getBookMapping();
  const bookProblems = getBookProblems(bookMapping);
  const lcProblems = await getCompletedProblems();
  const completed = union(bookProblems, lcProblems);
  const b = bookProblems.length;
  const c = completed.length;
  console.log(`completed ${c}/${b} (${Math.floor((c / b) * 100)})%`);
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
