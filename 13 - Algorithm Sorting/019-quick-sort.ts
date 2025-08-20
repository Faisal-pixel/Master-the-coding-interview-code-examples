function quickSort(array: number[], start, end) {
    console.log(array, start, end)
    if(end <= start) return; // base case
  let pivot = end;
  let i = -1;
  let j = 0;
  let temp: number;
  while (array[j] !== pivot) {
    if (array[j] < pivot) {
      i++;
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    j++;
  }
  temp = array[i + 1];
  array[i + 1] = pivot;
  array[j] = temp;

  let left = array.slice(0, i + 1);
  let right = array.slice(i + 2);
  quickSort(left, 0, left.length - 1)
  quickSort(right, 0, right.length - 1);
  return array;
}
let numbers = [8, 2, 4, 7, 1, 3, 9, 6, 5]
console.log(quickSort(numbers, 0, numbers.length - 1));
