class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const LIS = Array.from({length: nums.length}, () => 1)

        for(let i = nums.length - 2; i >= 0; i--) {
            for(let j = i + 1; j < LIS.length; j++){
                if(nums[i] < nums[j]) {
                    LIS[i] = Math.max(LIS[i], 1 + LIS[j])
                }
            }
        }

        return Math.max(...LIS)
    }
}
