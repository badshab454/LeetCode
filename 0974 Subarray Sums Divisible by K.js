/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let n = nums.length;
    let prefixMod = 0;
    let result = 0;
    let modGroups = new Array(k);
    modGroups[0] = 1;
    for (let num of nums) {
        prefixMod = (prefixMod + num % k + k) % k;
        result += modGroups[prefixMod] || 0;
        modGroups[prefixMod] = (modGroups[prefixMod] || 0) + 1;
    }
    return result;
};