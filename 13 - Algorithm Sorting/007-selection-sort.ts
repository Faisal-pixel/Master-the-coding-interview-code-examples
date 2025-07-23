const selectionSortNumbers: number[] = [8, 5, 2, 6, 9, 10, 1, 4, 0, 7];

function selectionSort (array: number[]) {
    for(let i = 0; i < array.length; i++) { // The first loop basically allows us to loop through the array, the number of times as the memmbers of the array
        let smallestNumber: number = array[i];
        let nextNumber: number;
        for (let j = 0; j < array.length; j++) {
            nextNumber = array[j+i]; // 5
            if(smallestNumber > nextNumber) { // 8 > 5 -> true 
                smallestNumber = nextNumber; // smallestNumber = 5;
            }
        }
        array[selectionSortNumbers.indexOf(smallestNumber)] = array[i]
        array[i] = smallestNumber; // 0
    }

}

function selectSortByAndrei (array: number[]) {
    // Here he keeps track of the index instead of the number
    for(let i = 0; i < array.length; i++) {
        let indexOfMin = i;
        let temp = array[i];

        for (let j = i + 1; j < array.length; j++) { // we set j to i+1 because by the time we are going through the list again 
            // we want to leave the sorted side alone. So j has to be one step ahead
            if(array[j] < array[indexOfMin]){
                indexOfMin = j
            }
        }
        
        array[i] = array[indexOfMin];
        array[indexOfMin] = temp;
    }
}

// selectSortByAndrei(selectionSortNumbers);
// console.log(selectionSortNumbers);

function selectionSortRevision(array: number[]) {
    for(let i = 0; i < array.length; i++) {
        let smallestNumber = array[i];
        let minIndex = i;

        for(let j = i + 1; j < array.length; j++) {
            if(smallestNumber > array[j]) {
                smallestNumber = array[j];
                minIndex = j;
            }
        }
        
        array[minIndex] = array[i];
        array[i] = smallestNumber;
    }
}
// So i thought, why cant we have O(n) for the best case scenario selection sort algorithm, and i realised something we always end up
// have to go through the array even if the whole arrray is sorted, because if you try to check if the smallest number doesnt change
// for one instance? It wont work because we can have an array like [0, 1, 2, 4, 3, 7, 8]
// Let's say array[n] = 2; We still need to use the n to check everything after that till the end, even though the smallest number
// is still 2, because the remainnig guys arent exactly sorted.

selectionSortRevision(selectionSortNumbers);
console.log(selectionSortNumbers);