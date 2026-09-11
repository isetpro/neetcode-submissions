class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map([
            [')', '('],
            ['}', '{'],
            [']', '['],
        ]);
        const stack = [];
        for(let c of s){
            if(map.has(c)){
                if(stack.length > 0 && stack.at(-1) === map.get(c)){
                     stack.pop()
                } else {
                    return false
                }
            } else {
            stack.push(c)
            }
        }
        return stack.length === 0
    }
}
