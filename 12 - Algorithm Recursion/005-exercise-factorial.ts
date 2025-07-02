let answer: number = 1;

function findFactorialRecursive(number: number): number {
    if(number < 1) {
        return answer
    }
    answer *= number;
    number--
    return findFactorialRecursive(number);
}

function findFactorialLoop(number: number): number {
    while(number >= 1) {
        answer *= number;
        number--
    }

    return answer;
}

console.log(findFactorialRecursive(6));