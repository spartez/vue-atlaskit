export function escapedRegExp(str) {
    return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}
