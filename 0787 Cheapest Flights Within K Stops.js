/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity); // fill array with infinity except the src
    prices[src] = 0;
    for(let i =0; i < k+1; i++){ 
        let tempPrice = [...prices];  //make a copy of prices and update it and not the actual prices array
        for(let [s,d,p] of flights){
            if(prices[s] == Infinity)continue; //this checks whether we are able to reach the source node or not
            if((prices[s] + p) < tempPrice[d])
                tempPrice[d] = prices[s] + p;
        }
        prices = [...tempPrice]; 
    }
    return prices[dst] == Infinity ? -1 : prices[dst]
};