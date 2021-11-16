'use strict';

const chunk = (arr, size) => Array.from({
  length: Math.ceil(arr.length / size)
}, (v, i) => arr.slice(i * size, i * size + size));
const isPromise = p => p && typeof p.then === 'function' && typeof p.catch === 'function';

exports.chunk = chunk;
exports.isPromise = isPromise;
