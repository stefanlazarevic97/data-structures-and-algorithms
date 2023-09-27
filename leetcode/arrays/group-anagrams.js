var groupAnagrams = function (strs) {
    const res = [];
    const map = new Map;

    for (let str of strs) {
        const sorted = str.split('').sort().join('');

        if (map.has(sorted)) {
            res[map.get(sorted)].push(str);
        } else {
            res.push([str]);
            map.set(sorted, res.length - 1);
        }
    }

    return res;
};