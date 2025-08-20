const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]) {
  //Code here
  // First of we want to keep looping right until we dont have to swap anymore, so for now i will just use true;
  // Now we want to loop through the entire array until the largest number has gotten to the end, before we start again;
  // We are going to have two variables a = array[i]; b = array[i+1]; then we want to have a temp variable:
  // if a is less than b, we just go to the next position:
  // if ( a < b) {
  /*      i++;
    //      continue;
    // } else {
        let temp = a;
        array[i] = b;
        array[i + 1] = a;
    *  }
     * 
     *  */
  let j = 0;
  while (j < array.length) {
    console.log(j)
    let i = 0;
    let noSwaps = true
    while (i < array.length) {
      let a = array[i];
      let b = array[i + 1];

      if (a > b) { // no worry about i = 1 being undefined, a  > undefined will return false so it wont bother running
        array[i] = b;
        array[i + 1] = a;
        noSwaps = false
      }
      i++;
    }
    if(noSwaps) break; // So if the array is sorted, then we can just break out of the looping.
    j++;
  }

  return array;
}
// console.log(bubbleSort([1,2,3,4,5]));

function bubbleSortRevision(array: number[]) {
  for(let i = 0; i < array.length; i++) {
    let swap = false;
    for(let j = 0; j < array.length; j++) {
      let temp = array[j];
      if(array[j] > array[j+1]) {
        array[j] = array[j+1];
        array[j+1] = temp;
        swap = true;
      }
    }

    if(!swap) return "Nothing to swap"
  }   
}

const returnedValue = bubbleSortRevision([
    0,  1,  2,  4,  5,
    6, 44, 63, 87, 99,
  283
]);

console.log(returnedValue);

