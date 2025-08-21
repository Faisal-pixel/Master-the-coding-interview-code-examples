function quickSort(array: number[], start, end) {
  console.log(array, start, end);
  if (end <= start) return; // base case. This helps us to stop when there is just a member in the array. So it means if the end index is less than or equal to the start index... i.e if end is <= 0, then we want to return
  let pivot = array[end]; // We want to always select our pivot from the end
  let i = start - 1;
  let j = start;
  let temp: number;
  while (array[j] !== pivot) { // As far as the member at j, which moves like on every iteration, is not equal to our pivot, meaning we arent at the end of the array yet, then keep looping.
    if (array[j] < pivot) { // Now we only want to do something when the current value is less than the pivot, then we want to kind of moving it more to the left, basically swapping it with the position of i++
      i++;
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } // So if the current value, is actually larger than the pivot, we do not do anything, just keep traversing through the array.
    j++;
  }
  // console.log("Pivot index i, just after the array: ", i)
  temp = array[i + 1]; // Then our pivot will be at i + 1;
  array[i + 1] = pivot;
  array[j] = temp;

  // let left = array.slice(start, i + 1);
  // let right = array.slice(i + 2, end);
  // console.log("left: ", left, "righy: ",  right);
  quickSort(array, start, i);
  quickSort(array, i + 2, end);
  return array;
}

function quickSortV1(array: number[], start: number, end: number) {
  console.log("I ran")
  // First base case
  if(end <= start) return;

  const pivotIndex = partitionArray(array, start, end);
  console.log("Pivot index: ", pivotIndex)

  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end)
  return array;
}

function partitionArray(array: number[], start: number, end: number) {
  console.log("I am partitioning")
  let pivot = array[end];
  let i = start - 1;
  for(let j = start; j < array.length; j++) {
    if(array[j] < pivot) {
      i++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  let temp = array[i + 1];
  array[i + 1] = pivot;
  array[end] = temp;
  return i + 1;
}
let numbers = [8, 2, 4, 7, 1, 3, 9, 6, 5];
console.log(quickSortV1(numbers, 0, numbers.length - 1));
