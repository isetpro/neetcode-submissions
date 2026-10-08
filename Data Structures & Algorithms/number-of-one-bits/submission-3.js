class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0;
        while(n > 0) {
            res++;
            n = n & (n - 1)
        }

        return res
    }
}
