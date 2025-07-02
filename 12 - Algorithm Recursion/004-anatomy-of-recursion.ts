let counter: number = 0;

function inception(): string | undefined { // if i dont put undefined as a return type, it will error out. So we hhave to put undefined
    console.log(counter);
    if(counter > 3) {
        return 'done!';
    }
    counter++;
    inception();
}

console.log(inception());
/**
 * So a quick explanation, for the above, if you check the debugger in chrome, and watch our local scope and script scope, we notice
 * something when we get to the 5th recursion where counter is 4, the if statement returns true ssince 4 is greater than 3 and finally
 * our function see a return and returns done! But here is the thing, we already have 5 incepton functions in our stack,
 * now yes after the first one, we get done, but by the time the call stack is popping out the remaining functions in the stack,
 * the local scope gets a return value of undefined.
 *
 * inception(inception(inception(inception(inception()))))
 * Its because when a fucntion doesnt 
 * Remember, the callstack wont run any other code until the call stack is empty.
 * 
 */

function inceptionThatReturns(): string {
    console.log(counter);
    if(counter > 3) {
        return 'done!';
    }
    counter++;
    return inceptionThatReturns();
}

console.log(inception());