/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var max = null, len = nums.length;
  var start = 0;
  while (start < len) {
    var ret = maxProductUntilZero(nums, start);
    if (max === null) max = ret.max;
    else max = Math.max(max, ret.max);
    start = ret.end + 1;
  }
  return max;
};

function maxProductUntilZero(nums, start) {
  var len = nums.length;
  var rets = [];
  var idx = 0, i = start;
  var nCount = 0;
  for (; i < len; i++) {
    if (nums[i] === 0)  break;
    if (nums[i] < 0) {
      rets[idx++] = nums[i];
      nCount++;
    } else {
      if (idx === 0 || rets[idx-1] < 0) rets[idx++] = nums[i];
      else rets[idx-1] = rets[idx-1] * nums[i];
    }
  }
  if (i === start) return { max: 0, end: start }; // [0]
  if ((i - start) === 1) return { max: nums[start], end: start }; // length === 1
  if (nCount === 0) return { max: rets[0], end: i };
  if (nCount === 1) return { max: maxOfArr(rets), end: i };

  var all = product(rets);
  if (nCount % 2 === 0) return { max: all, end: i };

  // 只需要考虑奇数位置的负数取或不取就行
  var max = 0, left = 1;
  len = rets.length;
  nCount = 0;
  for (var j = 0; j < len; j ++) {
    if (rets[j] < 0) {
      nCount ++;
      if (nCount % 2 === 1) {
        var right = all / (left * rets[j]);
        var tmp = Math.max(left, right);
        max = Math.max(max, tmp);
      }
    }
    left = left * rets[j];
  }
  return { max: max, end: i };
}

function maxOfArr(nums) {
  return nums.reduce(function(a, b) { return Math.max(a, b); });
}

function product(nums) {
  return nums.reduce(function(a, b) { return a * b; });
}
