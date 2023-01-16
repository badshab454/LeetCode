/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
         let ch=s[i]
         if(s.indexOf(ch)==i && s.indexOf(ch,i+1)==-1){
                 return i
         }
    }
        return -1
};