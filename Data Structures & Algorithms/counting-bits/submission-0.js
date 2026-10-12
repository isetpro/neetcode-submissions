class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [0];

        for(let i = 1; i <= n; i++){
            let num = i;
            let ones = 0;
            
            while(num > 0){
                ones += num % 2;
                num = Math.floor(num / 2);
            }

            res.push(ones)
        }

        return res;
    }
}
// 1 % 2