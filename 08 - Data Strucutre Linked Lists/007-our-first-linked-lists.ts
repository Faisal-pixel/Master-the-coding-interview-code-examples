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
}

const myFirstLinkedList = new LinkedList(10);


myFirstLinkedList.prepend(5);
myFirstLinkedList.prepend(2);

console.log(myFirstLinkedList)