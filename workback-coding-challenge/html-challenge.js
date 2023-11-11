function HTMLElements(str) {
    const openTags = ['<b>', '<i>', '<em>', '<div>', '<p>'];
    const closeTags = ['</b>', '</i>', '</em>', '</div>', '</p>'];
    const stack = [];
    const tags = str.match(/<\/?[a-z]+>/g); // This regex matches all HTML tags

    for (let tag of tags) {
        if (openTags.includes(tag)) {
            stack.push(tag);
        } else if (closeTags.includes(tag)) {
            const check = closeTags.indexOf(tag);
            if (stack.length > 0 && openTags[check] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                // If there's a mismatch or the stack is empty, return the needed tag without '<' and '>'
                return stack.length === 0 ? tag.substring(2, tag.length - 1) : stack[stack.length - 1].substring(1, stack[stack.length - 1].length - 1);
            }
        }
    }

    if (stack.length > 0) {
        return stack[stack.length - 1].substring(1, stack[stack.length - 1].length - 1);
    }

    return "true";
}
