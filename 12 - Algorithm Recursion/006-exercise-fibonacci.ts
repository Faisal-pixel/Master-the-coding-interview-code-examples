function fibonacciIterative(n: number) {
    if(n === 0) return 0;
    if(n <= 2)  return 1;
    let a = 1;
    let b = 1;
    let answer: number;

    for(let i = 3; i <= n; i++) {
        answer = a + b;
        a = b;
        b = answer;
    }

    return b
}


function fibonacciIterativeAndrei(n: number) {
    let arr = [0, 1];
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }

    return arr[n]
}


function fibonacciRecursive(n: number) {
    if(n === 0) return 0;
    if(n <= 2)  return 1;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

// REVISION: REWRITING THE FIBONACCIE SEQUENCE
/**
 * We know for our fibanacci sequence we have: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The pattern we see is every value is a sum of the previos one
 * 
 * So hence we have Fn = Fn-1 + Fn-2
 * 
 * We will be receiving a value N which represent the index of a member in our fibonacci sequence. So what is our base case
 * We know we want the number n to keep going down to the lowest possible index so that we can then bubble up the values.
 * So if our n is as low as 0 we want to return 0
 * if n is as low as 1, we want to return 1
 * if n is as low 2, we can go ahead and return 1
 * using our fomular Fn = Fn-1 + Fn-2
 * 
 * we can say our recursive case will be: recursiveFunc(n-1) + recursiveFunc(n-2);
 * How is this executed? Firstly, the computer goes down till it hit the base case for the first function which will return 1
 * (we technically dont want it to go less than 2 or 1 because its not necessary since both index 1 and 2 still going to give us 1
 * we only put that there in case the n=0 is inserted); 
 * 
 * 
 * 
 */

function recursiveFunctionRevision (n: number) {
    if(n===0) return 0;
    if(n <= 2) return 1;
    return recursiveFunctionRevision(n-1) + recursiveFunctionRevision(n-2);
}

