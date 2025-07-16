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
    let i = 0;
    while (i < array.length) {
      let a = array[i];
      let b = array[i + 1];
      console.log(i, "a:", a, "b:", b);

      if (a > b) { // no worry about i = 1 being undefined, a  > undefined will return false so it wont bother running
        array[i] = b;
        array[i + 1] = a;
      }
      i++;
    }
    console.log("j: ", j, "i: ", i);
    j++;
  }

  return array;
}
// console.log(bubbleSort(numbers));
// console.log(numbers);

function bubbleSortTest(numbers: number[]) {
    let i = 0;
    while(i < numbers.length) {
        console.log(numbers[i + 1])
        console.log(numbers[i] > numbers[i+1])
        i++;
    }
}

bubbleSortTest(numbers)
