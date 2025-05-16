class LinkedList {
    head: { value: any, next: any };
    tail: { value: any, next: any };
    length: number

    constructor(value) { // Our value will be our head's value
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
}

const myFirstLinkedList = new LinkedList(10);

console.log(myFirstLinkedList)