class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let result = 0;
      for(let c of n.toString(2)) {
        if(c === '1') result++;
      }
      return result;
    }
}
