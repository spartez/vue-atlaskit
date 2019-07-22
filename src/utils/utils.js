export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
export const isPromise = p => p && typeof p.then === 'function' && typeof p.catch === 'function';
