function mergeSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  nums1.splice(m, n, ...nums2); // O(n) -- worst case scenerio, there might be need for shifting

  // Lets write bubble sort

  for (let i = 0; i < nums1.length; i++) { // Worst case scenario O(n^2)
    let swap = false;
    for (let j = 0; j < nums1.length; j++) {
      // j and j +1
      let temp = nums1[j];
      if (nums1[j] > nums1[j + 1]) {
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
        swap = true;
      }
    }

    if (!swap) break;
  }
}

// Using javascripts sort function

function mergeSortedArraysV2(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  nums1.splice(m, n, ...nums2); // O(n) -- worst case scenerio, there might be need for shifting

  // Lets write bubble sort

  nums1.sort()
  return nums1;
}

console.log(mergeSortedArraysV2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
