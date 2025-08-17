let answer: number = 1;

function findFactorialRecursive(number: number): number {
  if (number <= 1) {
    return answer;
  }
  answer *= number;
  number--;
  return findFactorialRecursive(number);
}

function findFactorialRecursiveAndreiVersion(number: number): number {
  if (number < 2) return 1;
  if (number === 2) return 2;
  return number * findFactorialRecursiveAndreiVersion(number - 1);
}

function findFactorialLoop(number: number): number {
  while (number >= 1) {
    answer *= number;
    number--;
  }

  return answer;
}

// console.log(findFactorialRecursive(6));

/**
 *
 * @param n
 *
 * New way to think about recursion, and then solve it with factorial.
 * First question... what is our function... what is it doing?
 * Our function is going to be performing factorial of a number... Now what is the factorial of a number
 * 5! = 5 x 4!
 * So basically, n! = n x (n-1)!
 *
 * So that is what our function is doing...
 *
 * Now what is the recursive case? Why do we need to repeat...
 * This is because, to get 5!, we also need to get 4!... which in turn we can pass into our factorial function to do it for us.
 * Now that calls for recurssion. So, this means we want to always pass in a number smaller than 5 by 1, and on and on.
 * Sooo we have a function factorial()
 * For n!, we want to do
 * n x factorial (n - 1) x factorial (n - 2) x factorial (n - 3).
 *
 * Now we can fo do this:
 * factorial (n) {
 *  n * factorial(n - 1)
 * }
 *
 * We do not need to do n - 2, n -3, n -4, because:
 * factorial (
 *  n = 5;
 *  n x factorial (n-1
 *  n - 1 = 5 - 1 = 4;
 *  n = 4
 *  n x factorial (n-1)
 * )
 * )
 * 
 * The n keeps reducing
 *
 * Next question is, when do we stop? At what point do we want to stop the recursion, that is the base case?
 * 
 * we want to stop when n == 1, then just return  1. Because for every factorial of a number, we always stop at 1
 */

function factorialRecursiveRevision3(n: number) {
    if( n === 1)  return 1;

    return n * factorialRecursiveRevision3(n - 1);
}

/**
 * 
 * @param n 
 * 
 * What is the function, what is the action... factorial of 5 is?
 * 5 x 4!
 * So n! is:
 * n x (n - 1)! So we want to repeat the multiplication process reduction of the value of n, but stop when n = 1
 * We can define our loop, to keep looping when n > 0. Once we get to 0. We want to stop.
 */

function factorialLoopRevision3(n: number) {
    let answer = n;
    if ( n === 2) return 2
    for(let i = n - 1; i > 0; i--) {
        answer = answer * i
    }
    return answer;
}

console.log(factorialLoopRevision3(5));
