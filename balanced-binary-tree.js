/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  var ret = _isBalanced(root);
  console.log(ret)
  return ret.isBalanced;
};

function _isBalanced(node) {
  if (node === null) return { height: 0, isBalanced: true };
  var left = _isBalanced(node.left);
  var right = _isBalanced(node.right);
  var isBalanced = left.isBalanced && right.isBalanced;
  if (Math.abs(left.height - right.height) > 1) isBalanced = false;
  var height = Math.max(left.height, right.height) + 1;
  return { height: height, isBalanced: isBalanced };
}
