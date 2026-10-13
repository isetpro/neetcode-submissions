class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [0];
        let offset = 1;

        for (let i = 1; i <= n; i++) {
            if (offset * 2 === i) {
                offset = i
            }

            res.push(1 + res[i - offset]);
        }

        return res;
    }
}
