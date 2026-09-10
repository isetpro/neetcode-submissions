class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;

        for(let i = 0; i < prices.length - 1; i++){
            for(let o = i + 1; o < prices.length; o++){
                max = Math.max(max, prices[o] - prices[i]);
            }
        }
        return max
    }
}
