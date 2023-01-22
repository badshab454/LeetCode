/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    postorderTraversalHelper(root, result)
    return result;
   
};

const postorderTraversalHelper = (root, result) => {
    if(!root) return;
    postorderTraversalHelper(root.left, result)
    postorderTraversalHelper(root.right, result)
    result.push(root.val)
}