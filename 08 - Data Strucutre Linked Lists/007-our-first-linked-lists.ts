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

    append(incomingValue: any) {
        const toAppend = {
            value: incomingValue,
            next: null
        }

        this.tail.next = toAppend;

        this.tail = toAppend;
        this.length++

        return this;
    }
}

const myFirstLinkedList = new LinkedList(10);

myFirstLinkedList.append(20);
myFirstLinkedList.append(30);
myFirstLinkedList.append(40);
myFirstLinkedList.append(50);
myFirstLinkedList.append(60);
myFirstLinkedList.append(70);
myFirstLinkedList.append(80);
console.log(myFirstLinkedList.append(90));

// console.log(myFirstLinkedList)