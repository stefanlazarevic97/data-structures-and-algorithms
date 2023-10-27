var generateParenthesis = function (n) {
    let res = [];

    function backtrack(currentString, open, close) {
        if (currentString.length === 2 * n) {
            res.push(currentString);
            return;
        }

        if (open < n) {
            backtrack(currentString + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(currentString + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);

    return res;
};