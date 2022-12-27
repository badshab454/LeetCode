/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    var diff = [];
    var cnt = 0;
    var resCnt = 0;
    
    for(let i=0 ;i<capacity.length;i++)
    {
        var diffCnt = capacity[i] - rocks[i];
        
        diff[i] = diffCnt;
        cnt+=diffCnt;
    }

    if(additionalRocks > cnt)
    {
        return capacity.length;
    }
    
    diff.sort(function(a, b){return a-b});
    //diff.sort();
    //diff.forEach(element => console.log(element));

    for(let j = 0; j<diff.length; j++)
    {
        let a = diff[j];
        if(a == 0)
        {
            resCnt+=1;
            continue;
        }

        if(additionalRocks>=a)
        {
            resCnt+=1;
            additionalRocks-= a;
        }
        else
        {
            return resCnt;
        }
    }
    
    return resCnt; 
};