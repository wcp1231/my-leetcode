regex = re.compile('^[-+]?((\d+\.)|\d*\.?\d+)(e[-+]?(\d)+)?$')

class Solution:
    # @param s, a string
    # @return a boolean
    def isNumber(self, s):
        s = s.strip()
        return regex.match(s) != None
