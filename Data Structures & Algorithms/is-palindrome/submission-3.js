class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            while(!/[a-zA-Z0-9]/.test(s[left]) && left < right) {
               left++;
            }
            while(!/[a-zA-Z0-9]/.test(s[right]) && left < right) {
               right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }

            left++;
            right--;
        }
        return true
    }
}
