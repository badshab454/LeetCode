/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const sortedPoints = points.sort((a, b) => a[1] - b[1])
    let res = 1
    let endGroupPoin = sortedPoints[0][1]

    for (let i = 1; i < sortedPoints.length; i++) {
        if (sortedPoints[i][0] > endGroupPoin) {
            res += 1
            endGroupPoin = sortedPoints[i][1]
        }
    }

    return res
};