var isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                let temp = stack.pop();

                if (s[i] === ')' && temp !== '(') return false;
                if (s[i] === ']' && temp !== '[') return false;
                if (s[i] === '}' && temp !== '{') return false;
            }
        }
    }

    return stack.length === 0;
};