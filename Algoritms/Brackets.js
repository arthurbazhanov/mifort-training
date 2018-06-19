// 'use strict'

(function brackets() {
        let brackets = '()}';
        let stack = [];
        let bracket = {
            '}': '{',
            ')': '(',
            ']': '['
        }

        for (let i = 0; i < brackets.length; i++) {
            if (brackets[i] == '[' || brackets[i] == '(' || brackets[i] == '{') {
                stack.push(brackets[i]);
            }

            if (brackets[i] == ']'){
                if (bracket[brackets[i]] == stack.pop()){
                    console.log(stack);
                } else {
                    return false;
                };
            };
            if (brackets[i] == ')'){
                if (bracket[brackets[i]] == stack.pop()){

                }else {
                    return false;
                };
            };
            if(brackets[i]== '}') {
                if(bracket[brackets[i]] == stack.pop()){
                    console.log(stack);
                }else {
                    return false;
                }
            }

        }
        if (stack == 0){
            console.log('Скобки ок')
        }
    }
)();



