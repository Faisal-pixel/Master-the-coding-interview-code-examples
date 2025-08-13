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

// insertionSortArrayBetterVersion(insertionSortNumbersBeta);
// console.log(insertionSortNumbersBeta);

function insertionSortArrayRevision(array: number[]) {
  for(let i = 1; i < array.length; i++) {
    let currentNumber = array[i]; // We will always start from the second member so that we can compare with the first;
    let j = i - 1; // We will use j to loop backwards, so that we can use the current value to compare with the previous ones
     console.log("ith memeber", array[i], "jth member", array[j])             // Also we only want to loop if we are sure the currentValue is lesser than the one before it and j is greater
                  // or equal to 0
    while(j >= 0 && currentNumber < array[j]) {
      array[i] = array[j] // we want to move the element to where the currentNumber is, so basically we wantto move the element
      console.log("checking the value of array[i] inside the while loop", array[i], "the array", array)                    // One stepforward
      j--
    }

    array[j + 1] = currentNumber;
    console.log("Array at the end after the whileloop", array)
  }

}
console.log("Insertion numberarray before mutating", insertionSortNumbers)
insertionSortArrayRevision(insertionSortNumbers);
console.log(insertionSortNumbers)
