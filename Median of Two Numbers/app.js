// The function takes in two arrays, nums1 and nums2, and finds the median of the merged array of nums1 and nums2.

var findMedianSortedArrays = function (nums1, nums2) {
  // Merge the two arrays using the concat() method and sort them in ascending order using the sort() method.
  const merged = nums1.concat(nums2).sort((a, b) => a - b);

  // Find the middle index of the merged array.
  const mid = Math.floor(merged.length / 2);

  // Check if the length of the merged array is even.
  // If it is, calculate the average of the two middle elements.
  // If it is odd, return the middle element.
  return merged.length % 2 === 0
    ? (merged[mid] + merged[mid - 1]) / 2
    : merged[mid];
};
