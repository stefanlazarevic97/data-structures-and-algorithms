function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let left = array.filter(ele => ele < pivot);
    let right = array.filter(ele => ele >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}


module.exports = {
    quickSort
};