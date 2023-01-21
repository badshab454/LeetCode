/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    
    let stack = [root]
    let arr = []
        
    while (stack.length) {
        let curr = stack.pop()
        arr.push(curr.val)
        
        if (curr.right) {
            stack.push(curr.right)
        }
        
        if (curr.left) {
            stack.push(curr.left)
        }
    }
    
    return arr
};