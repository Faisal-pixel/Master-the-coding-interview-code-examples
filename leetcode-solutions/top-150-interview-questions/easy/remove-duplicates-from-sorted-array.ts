function removeDuplicates(nums: number[]) {
    let i = 1; // O(1)
    let index = 1; // O(1)
    nums.forEach((num, idx) => { //O(n)
        if(nums[idx] !== nums[i] && i < nums.length) {
            nums[index] = nums[i]
            index++
        }
        i++;
    })
    console.log(index)
    console.log(nums);
};

function removeDuplicatesV2(nums: number[]): number {
    let index = 1;
    nums.forEach((num, idx) => {
        if(idx > 0 && nums[idx] !== nums[idx - 1] && idx < nums.length) {
            nums[index] = nums[idx]
            index++
        }    
    })
    console.log(nums);
    return index;
};

console.log(removeDuplicatesV2([1, 1, 2, 3, 4, 4, 4]))