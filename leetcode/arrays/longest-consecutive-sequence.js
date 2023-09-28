var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longestSequence = 0;

    for (let i = 0; i < nums.length; i++) {
        let length = 0;

        if (!set.has(nums[i] - 1)) {
            while (set.has(nums[i] + length)) length++;
        }

        longestSequence = Math.max(longestSequence, length);
    }

    return longestSequence;
};