import { readFile } from 'node:fs/promises';

const hash = (word) => [...word].sort().join('');

const hashWords = (words) => words.map((word) => `${hash(word)} ${word}`);

const squash = (hashed) =>
  hashed.reduce((acc, entry) => {
    const [wordHash, word] = entry.split(' ');
    if (!(wordHash in acc)) {
      acc[wordHash] = [word];
    } else {
      acc[wordHash].push(word);
    }
    return acc;
  }, {});

const anagrams = (words) => Object.values(squash(hashWords(words)));

const loadFromDictionary = async () =>
  (await readFile('/usr/share/dict/words', 'utf-8'))
    .split('\n')
    .filter((word) => word.length > 1 && /^[a-z]+$/.test(word));

const words = await loadFromDictionary();
const result = anagrams(words).sort((a, b) => b.length - a.length);
