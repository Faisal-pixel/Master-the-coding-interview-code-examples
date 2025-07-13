let answer: number = 1;

function findFactorialRecursive(number: number): number {
    if(number <= 1) {
        return answer
    }
    answer *= number;
    number--
    return findFactorialRecursive(number);
}

function findFactorialRecursiveAndreiVersion(number: number): number {
    if (number < 2) return 1;
    if (number === 2) return 2;
    return number * findFactorialRecursiveAndreiVersion(number - 1);
}

function findFactorialLoop(number: number): number {
    while(number >= 1) {
        answer *= number;
        number--
    }

    return answer;
}

console.log(findFactorialRecursive(6));