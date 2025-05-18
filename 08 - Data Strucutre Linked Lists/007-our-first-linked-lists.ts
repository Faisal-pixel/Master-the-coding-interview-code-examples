class LinkedListNode {
    value: any; // In case you get confused again about whether this is setting a value to "value" and "next"
    next: null | any; //I finally used my brain, in js, you only set values when you use the equal sign and then we use column when setting
                //types

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

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

    // create an append method that receives a value
    // When we recieve the value, we want to first check if there is a head?
    // If there is no head, then set the head, but the truth is there will always be head
    // Sincne you can tcreate a linkedlist without setting the head
    // Then we can create an object called toAppend: {value: incomingValue, next: null}
    // then we can set this.head.next = toAppend;
    // Test it if this.head.next works.
    // Then if it does work, we want to set this.tail to toAppend
    // then we want to increase this.length
    // I figured out a problem, let's say we already append one element, then that means this.head.next wont be null anymore
    // Then that means we cant just be assigning every new value to this.head.next
    // What we can do is check, this.head.next === null (!this.head.next), then we just set it to toAppend object
    // and then set the this.tail to the toAppend object.
    // But if this.head.next !== null, then we can just take this.tail.next and set it to toAppend, then set this.tail to toAppend
    // So i realised since we are appending, nothing reallly concern us with the head, the tail is the koko
    append(incomingValue: any) {
        const toAppend = new LinkedListNode(incomingValue)

        this.tail.next = toAppend;

        this.tail = toAppend;
        this.length++

        return this;
    }

    // Creating the prepend method
    // So we are receiving a value, then we can create an object toPrepend= {value: incominValue, next: this.head}
    // Then after, we want to set this.head to toPrepent object. Cuz we always have to keep track of the head, and the first item
    // is always the head
    // Then we can increase the length

    prepend(incomingValue: any) {
        const toPrepend = new LinkedListNode(incomingValue);
        toPrepend.next = this.head;
        this.head = toPrepend;
        this.length++;
    }

    printList() {
        const array: any[] = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    // Creating insert
    // First of let us get the number that is at the index the user wants to insert into and store in a variable (numberToShift). 
    // We will use our printList function.
    // Then we also want to store our currentNode to this.head and we will use it to keep track of where we are in the LinkedList
    // then using the while loop, we can always check if currentNode !== null
    // then we check, if currentNode.value === numberToShift, if it is...
    // We want to first shift the numberToShift by setting currentNode.next to currentNode 
    // (remember nodes can only store nodes or null)
    // Then we can now set the curreNode.value = to the incomingValue
    // Then we have to update currentNode to currentNode.next
    // Then return printList
    // The above solution wont work because the line currentNode.next = currentNode is creating a reference to currentNode
    // So basically, what's happening is, even though it seems I am setting next currentNode with {value: 20, next: {value: 20, next: node}}
    // And i now change the currentNode.value to 30, becuase javascript keeps a reference to the object, it basically now says
    // {value: 30, next: {value: 30, next: node}}... So its always going to be referencing itself
    // Hence, we actually need to create a node for the insert. We cant just insert a value to a linkedlist, we have to insert a node
    // and remember a node, has both value and a next propert
    //Soooo:
    // we create a newNode and set the value to incomingValue, the next will be null for now. We also have our numberToShift.
    // and we should also select the one before the numberToShift so that we can set the next value of that one to our newNode
    // We can set the currentNode to this.head for our loop
    // if its equalt to the beforeNumberToshift, we want to set the next value to newNode
    // Then if its equal to numberToshift, we want to set the to Insert object's next to the currentNode

    insert(index: number, incomingValue: any) {
        const numberToShift = this.printList()[index];
        const beforeNumberToShift = this.printList()[index-1];
        const newNode = new LinkedListNode(incomingValue);
        let holdingNode;
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value)
            if(currentNode.value === beforeNumberToShift) {
                holdingNode = currentNode.next;
                currentNode.next = newNode;
                newNode.next = holdingNode
                this.length++
                return;
            }
            currentNode = currentNode.next;
        }

        this.length++
    }

    insertAsAndreiSolved(index: number, value: any) {
        if(index >= this.length) {
            this.append(value);
            return "Index to large, but value has been appended to the end"
        }
        const newNode = new LinkedListNode(value);
        const leadingNode = this.traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;
        leadingNode.next = newNode;
        newNode.next = holdingNode;
        this.length++;
    }

    traverseToIndex(index: number) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    remove(index: number) {
        const leadingNode = this.traverseToIndex(index-1);
        const node_to_delete = leadingNode.next;
        const holdingNode = node_to_delete.next;
        leadingNode.next = holdingNode;
        this.length--;
    }
}

const myFirstLinkedList = new LinkedList(10);



myFirstLinkedList.append(20)
myFirstLinkedList.append(40)
myFirstLinkedList.insertAsAndreiSolved(1, 30);
myFirstLinkedList.insertAsAndreiSolved(40, 30);
myFirstLinkedList.remove(1);

console.log("Print the whole list: ", myFirstLinkedList.printList(), "Print the length of the whole list: ", myFirstLinkedList.printList().length);
console.log(myFirstLinkedList)