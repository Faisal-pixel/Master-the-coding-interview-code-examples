function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo');
  }
}

boooo([1, 2, 3, 4, 5]); // O(n) - Tiime complexity is O(n) because the function loops through the array n times, where n is the length of the array.

// In the above function we arent really adding any more memory, apart from i, so the space complexity is O(1) - constant space complexity.

function arrayOfHiNTimes(n) {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }

  return hiArray;
}

arrayOfHiNTimes(6); // O(n) - Space complexity. We ignore  the constant space O(1) because it is not dependent on the size of the input. The space complexity is O(n) because the size of the array is dependent on the size of the input. The array will have n elements, where n is the size of the input.

// What is the O(n) for the below:

const array = [
    {
        tweet: 'hi',
        date: 2012
    },
    {
        tweet: 'my',
        date: 2014
    },
    {
        tweet: 'teddy',
        date: 2018
    }
];

// If we re to compare each tweet with each other, well that sounds like a log all pairs of an array problem. O(n^2) - Time complexity. The space complexity is O(1) because we are not adding any more memory, apart from the array itself. The space complexity is O(1) - constant space complexity.