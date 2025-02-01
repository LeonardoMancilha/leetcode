const merge = require('./mergeSortedArray');

describe('merge function', () => {
    test('it should merge two sorted arrays', () => {
        let nums1 = [1, 2, 3, 0, 0, 0];
        let nums2 = [2, 5, 6];
        let expected = [1, 2, 2, 3, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual(expected);
    });

    test('it should merge when there are duplicate values', () => {
        let nums1 = [1, 3, 3, 0, 0, 0];
        let nums2 = [1, 3, 3];
        let expected = [1, 1, 3, 3, 3, 3];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual(expected);
    });

    test('it should merge when nums1 is larger than nums2', () => {
        let nums1 = [1, 2, 7, 8, 0, 0];
        let nums2 = [3, 5];
        let expected = [1, 2, 3, 5, 7, 8];
        merge(nums1, 4, nums2, 2);
        expect(nums1).toEqual(expected);
    });

    test('it should merge when nums2 is larger than nums1', () => {
        let nums1 = [4, 0, 0, 0];
        let nums2 = [1, 2, 3];
        let expected = [1, 2, 3, 4];
        merge(nums1, 1, nums2, 3);
        expect(nums1).toEqual(expected);
    });

    test('it should handle when nums1 is empty (m = 0)', () => {
        let nums1 = [0, 0, 0];
        let nums2 = [2, 5, 6];
        let expected = [2, 5, 6];
        merge(nums1, 0, nums2, 3);
        expect(nums1).toEqual(expected);
    });

    test('it should handle when nums2 is empty (n = 0)', () => {
        let nums1 = [1, 2, 3];
        let nums2 = [];
        let expected = [1, 2, 3];
        merge(nums1, 3, nums2, 0);
        expect(nums1).toEqual(expected);
    });

    test('it should handle when both nums1 and nums2 are empty', () => {
        let nums1 = [];
        let nums2 = [];
        let expected = [];
        merge(nums1, 0, nums2, 0);
        expect(nums1).toEqual(expected);
    });

    test('it should correctly merge when nums2 is empty', () => {
        let nums1 = [1];
        let nums2 = [];
        let expected = [1];
        merge(nums1, 1, nums2, 0);
        expect(nums1).toEqual(expected);
    });

    test('it should return an updated nums1 when nums1 is empty and nums2 has elements', () => {
        let nums1 = [0];
        let nums2 = [1];
        let expected = [1];
        merge(nums1, 0, nums2, 1);
        expect(nums1).toEqual(expected);
    });
});

describe('merge function with error handling', () => {
    test('Should throw an error when nums1 is undefined', () => {
        expect(() => merge(undefined, 0, [1, 2, 3], 3)).toThrow('Invalid input: nums1 cannot be undefined');
    });

    test('Should throw an error when nums2 is undefined', () => {
        expect(() => merge([1, 2, 3], 3, undefined, 0)).toThrow('Invalid input: nums2 cannot be undefined');
    });

    test('Should throw an error when m or n are invalid (negative values)', () => {
        expect(() => merge([1, 2, 3], -1, [2, 5, 6], 3)).toThrow('Invalid input: m and n must be non-negative integers');
    });

    test('Should throw an error when m or n are not numbers', () => {
        expect(() => merge([1, 2, 3], 'a', [2, 5, 6], 3)).toThrow('Invalid input: m and n must be non-negative integers');
    });
});
