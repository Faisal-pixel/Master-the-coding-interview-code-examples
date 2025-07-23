const insertionSortNumbers: number[] = [99, 44, 6, 2, 1,5, 63, 87, 283, 4, 0];

function insertionSortArray(array: number[]) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if(array[i] < array[0]) {
            console.log("I ran: ", i)
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for(let j = 1; j < length; j++) {
                if(array[i] > array[j-1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    } 
}

// insertionSortArray(insertionSortNumbers);
// console.log(insertionSortNumbers)

const insertionSortNumbersBeta: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSortArrayBetterVersion(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;

    // Move elements of array[0..i-1], that are greater than currentValue, one position ahead
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    console.log(i, j, j +1)
    array[j + 1] = currentValue;
  }
}

insertionSortArrayBetterVersion(insertionSortNumbersBeta);
console.log(insertionSortNumbersBeta);
