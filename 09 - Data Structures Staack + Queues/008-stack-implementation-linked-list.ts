class StackNode<T> {
    value: T;
    next: StackNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class Stack<T = number> {
    top: StackNode<T> | null
    bottom: StackNode<T> | null
    length: number
    constructor() {
        this.bottom = null;
        this.top = null;
        this.length = 0;
    }

    // push(value: T) {
    //     if(this.isEmpty()) {
    //         this.bottom = new StackNode(value);
    //         this.top = this.bottom;
    //         this.length++
    //         return
    //     }
    //     const newNode = new StackNode(value);
    //     this.top && (this.top.next = newNode);
    //     this.top = newNode;
    //     this.length++
    // }

    push(value: T) {
        const newNode = new StackNode(value);
        if(this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
        }
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.top?.value;
    }

    // pop() {
    //     if(this.isEmpty()) return "Nothing to pop, stack is empty!";
    //     if(this.length === 1) {
    //         this.top = null;
    //         this.bottom = null;
    //         this.length--
    //         return;
    //     }

    //     const nodeBeforeTop = this.traverseToIndex(this.length - 2);
    //     nodeBeforeTop && (nodeBeforeTop.next = null);
    //     this.top = nodeBeforeTop;
    //     this.length--
    // }

    pop() {
        if(this.isEmpty()) return "Nothing to pop, stack is empty!";
        const poppedNode = this.top;

        this.top = this.top?.next || null;

        if(!this.top) { // If the top is actually null, then we need to set the bottom to null meaning the stack is empty.
            this.bottom = null
        }
        this.length--
        return poppedNode;
    }

    isEmpty() {
        return this.length === 0
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);


console.log(myStack);
console.log("Peeking", myStack.peek())