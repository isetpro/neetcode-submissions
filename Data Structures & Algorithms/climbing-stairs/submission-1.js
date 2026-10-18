class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;

        let [one,two] = [1,1];

        for(let i = n - 1; i > 0; i--){
            [one, two] = [two , one + two]
        }

        return two
    }
 
}
