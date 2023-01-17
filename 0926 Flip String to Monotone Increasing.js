/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let result = 0; 
    let count = 0;

    for (const str of s) {
        if(str== '1') {
            count++
        }else if(str =='0' && count> 0){
            result++
            count--
        }
    }
    return result;
};