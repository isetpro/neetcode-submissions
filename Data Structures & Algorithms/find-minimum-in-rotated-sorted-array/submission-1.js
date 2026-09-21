class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length === 1) return nums[0];

        let l = 0;

        for(let r = 1; r < nums.length; r++){
            if(nums[r] < nums[l]){
                l = r;
            }
        }

        return nums[l]
    }
}
