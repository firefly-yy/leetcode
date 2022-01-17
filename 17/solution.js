// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// 2: abc 3:def 4:ghi 5:jkl 6:mno 7:pqrs 8:tuv 9:wxyz
// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */


function letterCombinations(digits) {
    let res = [];
    if (!digits) return [];
    let findCombination = function (len, index, s) {
        if (index === len) {
            res.push(s);
            return
        }
        let c = digits[index]
        let map = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        if (c < 0 || c > 9 || c === 1) return;
        let letters = map[parseInt(c)];
        for (let i = 0; i < letters.length; i++) {
            findCombination(digits.length, index + 1, s + letters[i])
        }
    };
    findCombination(digits.length, 0, "");
    return res
};
console.log(letterCombinations("2"))

