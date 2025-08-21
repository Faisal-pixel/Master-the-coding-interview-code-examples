// Brute force approach. Complexity (O (m + n))
function removeElement(nums: (number | string)[], val: number) {
    let k: number = 0;
    nums.forEach((num, index) => {
        if(num === val) {
            nums[index] = "_";
        } else {
            k++
        }
        typeof num
    });

    nums.sort((a, b) => {
        const isANumber = typeof a === "number";
        const isBNumber = typeof b === "number";

        if(isANumber && isBNumber) {
            return (a as number) - (b as number)
        }

        if(isANumber && !isBNumber) {
            return -1
        }

        if(!isANumber && isBNumber) {
            return 1;
        }

        return 0;
    })

    console.log(nums, k)
};

function removeElementV1(nums: number[], val: number) {
    let k: number = 0;
    nums.forEach((num, index) => {
        if(num !== val) {
            nums[k] = num;
            k++
        }
    });

    
    return nums;
}


console.log(removeElementV1([1, 2, 3, 4, 3], 3));
