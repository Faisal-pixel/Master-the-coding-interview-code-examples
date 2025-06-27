// -------------------------------
// 🟢 Circular Singly Linked List
// -------------------------------

class CSinglyNode<T> {
    value: T;
    next: CSinglyNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class CircularSinglyLinkedList<T> {
    head: CSinglyNode<T> | null = null;
    tail: CSinglyNode<T> | null = null;
    length: number = 0;

    constructor(value: T) {
        const newNode = new CSinglyNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.tail.next = this.head; // makes it circular
        this.length = 1;
    }

    append(value: T) {
        const newNode = new CSinglyNode(value);
        if (!this.head || !this.tail) return;
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
        this.length++;
    }

    prepend(value: T) {
        const newNode = new CSinglyNode(value);
        if (!this.head || !this.tail) return;
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
        this.length++;
    }

    traverse() {
        const result: T[] = [];
        if (!this.head) return result;
        let current = this.head;
        do {
            result.push(current.value);
            current = current.next!;
        } while (current !== this.head);
        return result;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head!.next;
                this.tail!.next = this.head;
            }
            this.length--;
            return;
        }

        let current = this.head;
        let prev: CSinglyNode<T> | null = null;
        let count = 0;
        while (count < index) {
            prev = current;
            current = current!.next;
            count++;
        }
        prev!.next = current!.next;
        if (index === this.length - 1) {
            this.tail = prev;
        }
        this.tail!.next = this.head;
        this.length--;
    }

    reverse() {
        if (!this.head || this.length === 1) return;
        let prev = this.tail;
        let current = this.head;
        let next;

        do {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next!;
        } while (current !== this.head);

        this.tail = this.head;
        this.head = prev;
    }
}

// -------------------------------
// 🔵 Circular Doubly Linked List
// -------------------------------

class CDoublyNode<T> {
    value: T;
    next: CDoublyNode<T> | null = null;
    prev: CDoublyNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class CircularDoublyLinkedList<T> {
    head: CDoublyNode<T> | null = null;
    tail: CDoublyNode<T> | null = null;
    length: number = 0;

    constructor(value: T) {
        const newNode = new CDoublyNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.head.next = this.head;
        this.head.prev = this.head;
        this.length = 1;
    }

    append(value: T) {
        const newNode = new CDoublyNode(value);
        if (!this.tail || !this.head) return;
        newNode.prev = this.tail;
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head.prev = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: T) {
        const newNode = new CDoublyNode(value);
        if (!this.head || !this.tail) return;
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.head.prev = newNode;
        this.tail.next = newNode;
        this.head = newNode;
        this.length++;
    }

    traverse() {
        const result: T[] = [];
        if (!this.head) return result;
        let current = this.head;
        do {
            result.push(current.value);
            current = current.next!;
        } while (current !== this.head);
        return result;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return;

        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head!.next;
                this.head!.prev = this.tail;
                this.tail!.next = this.head;
            }
            this.length--;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        current!.prev!.next = current!.next;
        current!.next!.prev = current!.prev;
        if (current === this.tail) {
            this.tail = current && current.prev;
        }
        this.length--;
    }

    reverse() {
        if (!this.head || this.length === 1) return;
        let current = this.head;
        let temp: CDoublyNode<T> | null = null;
        do {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev!;
        } while (current !== this.head);

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
}
