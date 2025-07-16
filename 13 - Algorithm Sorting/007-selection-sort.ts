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

selectionSort(selectionSortNumbers);
console.log(selectionSortNumbers);
