// 'use strict'

module.exports = brackets;

function brackets(value) {
    let stack = [];
    let bracket = {
        '>': '<',
        ')': '(',
        ']': '['
    };

    for (let i = 0; i < value.length; i++) {
        if (value[i] == '[' || value[i] == '(' || value[i] == '<') {
            stack.push(value[i]);
        }
        if (value[i] == ']' || value[i] == ')' || value[i] == '>'  ) {
            if (bracket[value[i]] == stack.pop()) {
                return 1
            } else {
                return 0;
            };
        };
    }
    if (stack.length == 0) {
        return 1
    } else {
        return 0
    };

}

