function twoSum(nums: number[], target: number): number[] {
  // O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  }
  return [];
}

function twoSumOptimized(nums: number[], target: number) {
  const mappedObject: Map<number, number> = new Map();
  for(let j = 0; j < nums.length; j++) {
    mappedObject.set(nums[j], j)
  }

  console.log(mappedObject);

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (mappedObject.has(complement) && i !== mappedObject.get(complement)) {
      return [i, mappedObject.get(complement)];
    }
  }

  return [];
}

console.log(twoSumOptimized([3, 3], 6));
