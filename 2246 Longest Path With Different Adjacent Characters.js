/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    let result=0;
    const arr=Array.from({length:s.length},()=>[]);
    const cache=Array.from({length:s.length},()=>[])
    for(let i=1;i<s.length;i++){
      arr[i].push(parent[i])
      arr[parent[i]].push(i)
     }
// array for ex1 i-node can achieve nodes 0->1 or 0->2 ...
// [ [ 1, 2 ], [ 0, 3, 4 ], [ 0, 5 ], [ 1 ], [ 1 ], [ 2 ] ]
const dfc=(cur, prev)=>{
    // if it isn't exist children return 1 if letter is different
   if(arr[cur].length === 1 && prev!==-1){
       return +(s[cur]!==s[prev])
   }
    for(let node of arr[cur]){
        // exit if prev node === current
        if(node===prev) continue;
        const data=dfc(node, cur);
        //collect all lengths of children
        cache[cur].push(data)
      }
      // sort to detect 2 longest chains 
       cache[cur].sort((a,b)=>b-a);
     // 2 longest chains+1 is a result
     result=Math.max(result,(cache[cur][0]||0)+(cache[cur][1]||0)+1 )
      // return max+1 if letter is different and 0 if not
   return s[cur]!==s[prev]?cache[cur][0]+1:0


}
dfc(0, -1)

return result
};