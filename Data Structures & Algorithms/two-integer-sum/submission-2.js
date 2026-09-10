class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;

        while(left < nums.length){
            const diff = target - nums[left]

            for(let i = 0; i<nums.length ;i++){
                if(i !== left && nums[i] === diff){
                    return [left, i]
                }
            }
            left++;

        }
    }
}
