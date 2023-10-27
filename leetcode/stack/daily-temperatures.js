var dailyTemperatures = function (temperatures) {
    let stack = [];
    let res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let lastIndex = stack.pop();
            res[lastIndex] = i - lastIndex;
        }

        stack.push(i);
    }

    return res;
};