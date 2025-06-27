class CircularSinglyNode<T> {
    value: T;
    next: CircularSinglyNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class CircularSinglyLinkedList1<T> {
    head: CircularSinglyNode<T> | null = null;
    tail: CircularSinglyNode<T> | null = null;
    length: number = 0;

    constructor(value: T) {
        const newNode = new CircularSinglyNode(value);
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head; // makes it circular
        this.length = 1;
    }

    append(value: T): void {
        const newNode = new CircularSinglyNode(value);
        if (!this.head || !this.tail) return;
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: T): void {
        const newNode = new CircularSinglyNode(value);
        if (!this.head || !this.tail) return;
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head = newNode;
        this.length++;
    }

    remove(index: number): void {
        if (index < 0 || index >= this.length || !this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            if (this.tail) this.tail.next = this.head;
            this.length--;
            return;
        }
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (prev.next) prev = prev.next;
        }
        const toRemove = prev.next;
        prev.next = toRemove?.next || null;
        if (toRemove === this.tail) this.tail = prev;
        this.length--;
    }

    traverse(): T[] {
        const values: T[] = [];
        if (!this.head) return values;
        let current = this.head;
        do {
            values.push(current.value);
            current = current.next!;
        } while (current !== this.head);
        return values;
    }

    reverse(): void {
        if (!this.head || this.length <= 1) return;
        let prev = this.tail;
        let current = this.head;
        let next: CircularSinglyNode<T> | null = null;
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