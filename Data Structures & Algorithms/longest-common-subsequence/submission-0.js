class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const LCS = Array.from({ length: text1.length + 1 }, () =>
            Array.from({ length: text2.length + 1 }, () => 0),
        );

        for (let i = text1.length - 1; i >= 0; i--) {
            for (let j = text2.length - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    LCS[i][j] = 1 + LCS[i + 1][j + 1];
                } else {
                    LCS[i][j] = Math.max(LCS[i][j + 1], LCS[i + 1][j]);
                }
            }
        }

        return LCS[0][0];
    }
}
