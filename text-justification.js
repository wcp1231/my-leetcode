/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  var result = [], currentLine = [], currentLen = 0;
  var len = words.length, space, extra, wordCount;
  for (var i = 0; i < len; i++) {
    var wordLen = words[i].length;
    wordCount = currentLine.length;
    if (currentLen === 0 || currentLen + wordLen + wordCount <= maxWidth) { // 当前行的单词数就是需要的最少空格数
      currentLine.push(words[i]);
      currentLen += wordLen;
    } else { // 放不下了
      result.push(formatLine(currentLine, currentLen, maxWidth, false));

      currentLine = [words[i]];
      currentLen = wordLen;
    }
  }

  result.push(formatLine(currentLine, currentLen, maxWidth, true));
  return result;
};

function formatLine(words, currentLen, maxWidth, isLast) {
  var wordCount = words.length;
  var space = maxWidth - currentLen;
  var result;

  if (wordCount === 1) return words[0] + genSpace(space);
  if (isLast) {
    result = words.join(' ');
    return result + genSpace(maxWidth - result.length);
  }

  result = words[0];
  var gapCount = (wordCount - 1);
  var extra = space % gapCount;
  var gap = Math.floor(space / gapCount);
  for (var i = 1; i < wordCount; i++) {
    result += genSpace(gap);
    if (extra > 0) {
      result += ' ';
      extra --;
    }
    result += words[i];
  }
  return result;
}

function genSpace(count) {
  var result = '';
  while (count > 0) {
    result += ' ';
    count--;
  }
  return result;
}
