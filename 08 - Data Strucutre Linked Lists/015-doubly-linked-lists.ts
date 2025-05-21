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
    head: {value: any, next: any | null, prev: null | any};
    tail: {value: any, next: null | any, prev: any | null};
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
        newDoublyLinkedListNode.prev = this.tail;
        this.tail.next = newDoublyLinkedListNode;
        this.tail = newDoublyLinkedListNode;
        this.length++;
    }

    // Now for prepend
    // Function receives value. We create a new node using our class
    // We set newNode.next to this.head
    // Then set this.head to the newNode
    prepend(value: any) {
        const newDoublyLinkedListNode = new DoublyLinkedListNode(value);
        newDoublyLinkedListNode.next = this.head;
        this.head.prev = newDoublyLinkedListNode;
        this.head = newDoublyLinkedListNode;
        this.length++
    }

    // We want tocreate an array, where will push the values.
    // Then to loop through, normal way, currentNode = this.head; while currentNode !== null, we keep pushing the value into the array
    // Then we set currentNode = currentNode.next
    printList() {
        const array: any[] = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    // Traverse until index function
    // SO basically, we create a counter variable and set to 0;
    // Then we want to loop through and use the counter to know the position
    // While counter !== 2, keep increasing counter and setting currentNode = currentNode.next. After we want to return currentNode
    traverseUntilIndex(index: number) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++
        }

        return currentNode;
    };

    // For the insert functiion, we are receiving index, and value
    // First we create the node with the value;
    // Then we need to traverse to the node before the index
    // Then we want to hold the value of nodeBeforeIndex.next; So we can use this later.
    // Then we want to set nodeBeforeIndex.next to our newNode
    // Then we want to set newNode.prev to nodeBeforeIndex
    // Then we want to set newNode.next to holdingNode
    // Then we want to set holdingNode.prev to newNode

    insert(index: number, value: any) {
        if(index >= this.length) {
            this.append(value);
            return
        }
        const newDoublyLinkedListNode = new DoublyLinkedListNode(value);
        const nodeBeforeIndex = this.traverseUntilIndex(index - 1);
        const holdingNode = nodeBeforeIndex.next;
        nodeBeforeIndex.next = newDoublyLinkedListNode;
        newDoublyLinkedListNode.prev = nodeBeforeIndex;
        newDoublyLinkedListNode.next = holdingNode;
        holdingNode.prev = newDoublyLinkedListNode;
        this.length++;
    }
    // So to remove, we first traverse to the node at the index.
    // Then we hold the node in nodeToRemove.next;
    // Then we also hold nodeToRemove.prev.
    // Then we set prevNode.next to nextNode.
    // Then we set nextNode.prev to prevNode
    remove(index: number) {
        const nodeToRemove = this.traverseUntilIndex(index);
        const nextNode = nodeToRemove.next;
        const prevNode = nodeToRemove.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(20);
myDoublyLinkedList.insert(2, 40);

myDoublyLinkedList.insert(3, 30);
myDoublyLinkedList.insert(4, 20);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList);