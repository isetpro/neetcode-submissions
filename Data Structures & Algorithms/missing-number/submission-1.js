class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        const set = new Set()

        for(let n of nums) {
            set.add(n)
        }
        
        for(let i = 0; i <= n; i++) {
            if(!set.has(i)) return i
        }
    }
}
