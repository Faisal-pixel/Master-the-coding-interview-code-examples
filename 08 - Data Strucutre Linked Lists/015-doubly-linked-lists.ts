class DoublyLinkedListNode {
    value: any;
    next: any | null;
    prev: any | null;

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: {value: any, next: any | null, prev: null};
    tail: {value: any, next: null, prev: any | null};
    length: number;

    constructor(value: any) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    // Now for append
    // We need a function. This function will receive the vallue of the node right.
    // Then we need to create an actual node using our DoublyLinkedListNode class so that it can have the value, next and prev prop
    // The next property will be set to null. Then we have to set the prev to this.tail
    //Then we set this.tail to the new node.
    append(value: any) {
        const newDoublyLinkedListNode = new DoublyLinkedListNode(value);
        this.head.next = newDoublyLinkedListNode;
        newDoublyLinkedListNode.next = null;
        newDoublyLinkedListNode.prev = this.tail;
        this.tail = newDoublyLinkedListNode;
        this.length++;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(20)
console.log(myDoublyLinkedList);