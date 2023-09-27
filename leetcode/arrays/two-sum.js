var twoSum = function (nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i];

        if (hash[x] !== undefined) {
            return [hash[x], i];
        } else {
            hash[nums[i]] = i;
        }
    }
};