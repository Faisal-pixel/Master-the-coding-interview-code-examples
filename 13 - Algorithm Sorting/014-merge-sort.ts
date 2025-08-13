const mergeSortNumbers: number[] = [99, 44, 6, 2, 1,5, 63, 87, 283, 4, 0];

function mergeSort (array: number[]) {
    if(array.length === 1) {
        return array
    }

    // Split Array in into right and left

    const length = array.length;
    const middle = Math.floor(length / 2)
    const left: number[] = array.slice(0, middle);
    const right: number[] = array.slice(middle);

    return merge (mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]) {
    const result: number[] = [];

    let leftIndex: number = 0;
    let rightIndex: number = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// const answer = mergeSort(mergeSortNumbers);
// console.log(answer)

function mergeSortRevision(array: number[]) {
    if(array.length === 1) { // The base case
        return array;
    }

    // We will do the splitting here
    let length = array.length;
    let middleIndex = Math.ceil(length/2); // This will round it up. so if we have 9.5, we get 10
    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex);

    return mergeRevision(
        mergeSortRevision(left),
        mergeSortRevision(right)
    )
}

function mergeRevision(leftArray: number[], rightArray: number[]) {
    // So we will do the merging here.

    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
        let newArray: number[] = [];
        if(leftArray[leftIndex] > rightArray[rightIndex]) {
            newArray.push(rightArray[rightIndex]);
            rightIndex++;
        } else {
            newArray.push(leftArray[leftIndex]);;
            leftIndex++;
        }
    }
}