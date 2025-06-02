class StackWitArrays<T = number | string> {
    stack: T[]

    constructor() {
        this.stack = []
    }

    pop() {
        if(this.isEmpty()) return "The stack is empty. Nothing to Pop!";
        this.stack.pop();
    }

    push(value: T) {
        this.stack.push(value)
    }

    peek() {
        if(this.isEmpty()) return "The stack is empty. Nothing to Peek!"
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}