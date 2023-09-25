var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const count = {};

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]]++;
        } else {
            count[s[i]] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!count[t[j]]) return false;
        count[t[j]]--;
    }

    return true;
};