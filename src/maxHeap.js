import { createHeapFunctions } from './heap.js';

const lessThan = (lhs, rhs) => lhs < rhs;

export const { push, pop, peek, update } = createHeapFunctions(lessThan);
