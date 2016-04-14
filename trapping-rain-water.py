class Solution:
    # @param A, a list of integers
    # @return an integer
    def trap(self, A=[]):
        result = 0
        left = 0
        right = len(A) - 1
        while left < right:
            lower = min(A[left], A[right])
            if A[left] == lower:
                left = left + 1
                while left < right and A[left] <= lower:
                    result = result + (lower - A[left])
                    left = left + 1
            else:
                right = right - 1
                while left < right and A[right] <= lower:
                    result = result + (lower - A[right])
                    right = right - 1
        return result
