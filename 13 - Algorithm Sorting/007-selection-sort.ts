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

selectSortByAndrei(selectionSortNumbers);
console.log(selectionSortNumbers);
