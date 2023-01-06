/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let total = 0;
    let count = 0;
    costs.sort((a,b)=>a-b)
    for(let i of costs){
        total+= i;
        if(total>coins) break;
        count++

    }  
    return count
};