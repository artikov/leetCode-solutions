/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let closes = []
    for (let i = 0 ; i < s.length; i++){
        if (s[i] == '(') closes.push(')')
        else if (s[i] == '[') closes.push(']')
        else if (s[i] == '{') closes.push('}')
        else if (s.length === 0 || closes[closes.length-1] !== s[i]) return false
        else closes.pop()
    }

    return closes.length === 0
};