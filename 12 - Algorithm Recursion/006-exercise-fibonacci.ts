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



function fibonacciRecursive(n: number) {
    if(n === 0) return 0;
    if(n <= 2)  return 1;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(7));