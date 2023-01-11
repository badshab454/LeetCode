/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let map = {}

    for(let [x,y] of edges){
        if(!map[y]) map[y] = []
        map[y].push(x)
    }
    let check = {}
    let res =0;
    for(let i =1; i<hasApple.length;i++){
        if(hasApple[i]){
            let curV = i;
            while(curV !=0 && !check[curV]){
                res +=2;
                check[curV] = 1;
                curV = map[curV]
            }
        }
    }
    return res;
};