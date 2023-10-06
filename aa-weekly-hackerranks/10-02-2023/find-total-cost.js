function findTotalCost(arr) {
    let totalCost = 0;
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        let min = arr.shift();
        let max = arr.pop();

        let cost = Math.ceil((min + max) / (max - min + 1));
        totalCost += cost;

        let sum = min + max;

        let index = binarySearchInsert(arr, sum);
        arr.splice(index, 0, sum);
    }

    return totalCost;
}

function binarySearchInsert(arr, value) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        let mid = (low + high) >>> 1;

        if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}