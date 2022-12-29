/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (_.size(strs) === 0) {
        return "";
    }
    
    strs = strs.sort();
    const first = Array.from(_.first(strs));
    const last = Array.from(_.last(strs));
    
    let res = "";
    first.forEach((s, i) => {
        
        if (i !== res.length) {
            return;
        }
        
        if (first[i] == last[i]) {
            res += s;
        }
    });
    return res;
};