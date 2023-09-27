var topKFrequent = function (nums, k) {
    let res = [];
    let map = new Map();

    nums.forEach(num => {
        map.set(num, map.get(num) + 1 || 1);
    })

    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }

    return res;
};