function majorityElement(nums: number[]): number {
    const map: Map<number, number> = new Map();
    
    for(let x = 0; x < nums.length; x++) {
        if (map.has(nums[x])) {
            map.set(nums[x], (map.get(nums[x]) ?? 0) + 1);
        } else {
            map.set(nums[x], 1);
        }
        if(map.get(nums[x]) as number > nums.length/2) {
            return nums[x]
        }
    }
    
    return 0;
}; // Timie complexity of O(n), space complexity of O(1)




function majorityElementV2(nums: number[]): number {
    let majority = 0, res = 0
    for(let x of nums) {
        majority === 0 ? res = x : null;

        res === x ? majority += 1 : majority -= 1;
    }
    
    return res;
}; // Timie complexity of O(n), space complexity of O(1)
console.log(majorityElementV2([2,2,1,1,1, 1, 1,2,2]))   