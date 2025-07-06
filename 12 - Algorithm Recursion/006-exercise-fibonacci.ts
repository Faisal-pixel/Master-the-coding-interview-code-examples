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

console.log(fibonacciIterativeAndrei(50));