/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  var ret = _rob(root);
  return ret.token > ret.notToken ? ret.token : ret.notToken;
};

function _rob(node) {
  if (node === null) return { token: 0, notToken: 0 };
  var left = _rob(node.left);
  var right = _rob(node.right);
  var token = node.val + left.notToken + right.notToken;
  var notToken = Math.max(left.token, left.notToken) + Math.max(right.token, right.notToken);
  return { token: token, notToken: notToken };
}
