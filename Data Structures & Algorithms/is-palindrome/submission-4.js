class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let right = s.length - 1;
        const regex = /^[a-z0-9]+$/i;

        for (let left = 0; left < s.length; left++) {
            //check char left and right else shift
            if (!regex.test(s[left])) {
                continue;
            }
            while (!regex.test(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            right--;
            // check left with right else return false
        }
        return true
    }
}
