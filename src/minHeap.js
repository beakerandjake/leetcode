import { createHeapFunctions } from './heap.js';

const greaterThan = (lhs, rhs) => lhs > rhs;

export const { push, pop, peek, update } = createHeapFunctions(greaterThan);
