class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for (let c of s) {
            map.set(c, (map.get(c) || 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            if (!map.has(char)) return false;

            map.set(char, map.get(char) - 1);
        }

        return [...map.values()].every((v) => v === 0);
    }
}
