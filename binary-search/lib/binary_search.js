function binarySearch(array, target) {
    if (array.length === 0) return false;

    let center = Math.floor(array.length / 2);
    let left = array.slice(0, center);
    let right = array.slice(center + 1);

    if (target < array[center]) {
        return binarySearch(left, target);
    } else if (target > array[center]) {
        return binarySearch(right, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
    if (lo === hi) return -1;

    let center = Math.floor((lo + hi) / 2);

    if (target < array[center]) {
        return binarySearchIndex(array, target, lo, center);
    } else if (target > array[center]) {
        return binarySearchIndex(array, target, center + 1, hi);
    } else {
        return center;
    }
}

module.exports = {
    binarySearch,
    binarySearchIndex
};