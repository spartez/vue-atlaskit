export const many = factory => (opts, count) => Array.from({ length: count }).map((_, index) => factory({ ...opts }, index));
