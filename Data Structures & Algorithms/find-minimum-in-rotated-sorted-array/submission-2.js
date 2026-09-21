class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 1) return nums[0];
        let res = nums[0];
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            if (nums[l] < nums[r]) {
                res = nums[l] < res ? nums[l] : res;
                break;
            }

            let mid = Math.floor((r + l) / 2);
            res = nums[mid] < res ? nums[mid] : res;
            
            if (nums[mid] >= nums[l]) {
                // right
                l = mid + 1;
            } else {
                //
                r = mid - 1;
            }
        }
        return res;
    }
}
