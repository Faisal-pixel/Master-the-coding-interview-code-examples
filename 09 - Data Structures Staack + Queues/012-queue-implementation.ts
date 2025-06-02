class QueueNode<T> {
    value: T;
    next: QueueNode<T> | null

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class Queue<T> {
    length: number
    first: QueueNode<T> | null
    last: QueueNode<T> | null

    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(this.isEmpty()) return "Nothing to peek! The Queue is empty";

        return this.last?.value;
    }

    enqueue(value: T) {
        const newNode = new QueueNode(value);
        if(this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
            this.length++
        } else {
            const holdingNode = this.first;
            this.first = newNode;
            this.first.next = holdingNode;
            this.length++
        }
        return this;
    }

    dequeue() {
        if(this.isEmpty()) return "Nothing to dequeue! The queue is empty!";
        const dequeuedNode = this.first;
        this.first = this.first?.next || null;
        if(!this.first) this.last = null
        this.length--
        return dequeuedNode;
    }
}

const myQueue = new Queue();



myQueue.enqueue("Justin");
myQueue.enqueue("Favour");
myQueue.enqueue("Faisal");

console.log("First", myQueue)
// console.log(myQueue.dequeue());
console.log(myQueue.peek())

console.log("Last", myQueue);