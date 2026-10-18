class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;

        let pos = [1,1];

        for(let i = 3; i <= n; i++){
            pos = [pos[1], pos[0] + pos[1]]
        }

        return pos[0] + pos[1]
    }
 
}
