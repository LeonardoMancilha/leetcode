const merge = function(nums1, m, nums2, n) {
    if (nums1 === undefined) {
        throw new Error('Invalid input: nums1 cannot be undefined');
    }
    if (nums2 === undefined) {
        throw new Error('Invalid input: nums2 cannot be undefined');
    }
    if (typeof m !== 'number' || typeof n !== 'number' || m < 0 || n < 0) {
        throw new Error('Invalid input: m and n must be non-negative integers');
    }
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error('Invalid input: nums1 and nums2 must be arrays');
    }

    let i = m - 1, j = n - 1, k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    
    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]

module.exports = merge;
