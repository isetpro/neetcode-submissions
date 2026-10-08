class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // 2 pointers
        // left++ if next bigger
        // right--
        // skip less

        let max = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            max = Math.max(max, (right - left) * Math.min(heights[left], heights[right]));
            if(heights[left] < heights[right] ){
                left++
            } else {
                right--
            }
        }

        return max
    }
}
