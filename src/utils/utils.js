export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
export const isPromise = p => p && typeof p.then === 'function' && typeof p.catch === 'function';

export function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(node.nodeName) >= 0) {
        return document.body;
    }

    // Firefox wants to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getComputedStyle(node);

    if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
        return node;
    }

    return getScrollParent(node.parentNode);
}
