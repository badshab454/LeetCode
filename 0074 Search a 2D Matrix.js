/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n=matrix.length;
    let m=matrix[0].length;
    let low=0;
    let high=m*n-1;
    
    while(low<=high){
        let mid=Math.floor(high-(high-low)/2);
        let midCol=mid%m;
        let midRow=Math.floor(mid/m);
        if(matrix[midRow][midCol]>target){
            high=mid-1;
        }else if(matrix[midRow][midCol]<target){
            low=mid+1;
        }else{
            return true;
        }
    }
    return false;
}