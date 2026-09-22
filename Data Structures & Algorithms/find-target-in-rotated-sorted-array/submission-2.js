class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let res = -1;

        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] === target) {
                res = m;
                break;
            }

          // check connection m with left or right
          if(nums[m] >= nums[l]) {
            // m is left
            if(target > nums[m] || target < nums[l]) {
                // search right 
                l = m + 1;
            } else {
                // search left
                r = m - 1;
            }
          } else {
            if(target < nums[m] || target > nums[r]) {
                r = m - 1
            } else {
                l = m + 1
            }
          }
        }
        return res
    }
}
