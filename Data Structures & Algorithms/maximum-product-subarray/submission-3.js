class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMax = nums[0];
        let currMin = nums[0];
        let max = currMax;
        let min = currMin;

        for (let i = 1; i < nums.length; i++) {
            const prevMax = currMax;
            const prevMin = currMin;
            currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
            currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
            min = Math.min(min, currMin);
            max = Math.max(max, currMax);
        }

        return max;
    }
}
