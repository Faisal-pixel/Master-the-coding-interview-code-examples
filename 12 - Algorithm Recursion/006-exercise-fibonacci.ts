function fibonacciIterative(n: number) {
    if(n === 0) return 0;
    if(n <= 2)  return 1;
    let a = 1;
    let b = 1;
    let answer;

    for(let i = 3; i <= n; i++) {
        console.log(i)
        answer = a + b;
        a = b;
        b = answer
        console.log("a:", a);
        console.log("b:", b);
    }

    return b
}

console.log(fibonacciIterative(7));