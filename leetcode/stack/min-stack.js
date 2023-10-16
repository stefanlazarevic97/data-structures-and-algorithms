var MinStack = function () {
    this.mainStack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {
    this.mainStack.push(val);
    const lastEle = this.minStack[this.minStack.length - 1];

    if (this.minStack.length === 0 || val <= lastEle) {
        this.minStack.push(val);
    } else {
        this.minStack.push(lastEle);
    }
};

MinStack.prototype.pop = function () {
    if (this.mainStack.length > 0) {
        this.mainStack.pop();
        this.minStack.pop();
    }
};

MinStack.prototype.top = function () {
    if (this.mainStack.length > 0) {
        return this.mainStack[this.mainStack.length - 1];
    }

    return null;
};

MinStack.prototype.getMin = function () {
    if (this.minStack.length > 0) {
        return this.minStack[this.minStack.length - 1];
    }

    return null;
};