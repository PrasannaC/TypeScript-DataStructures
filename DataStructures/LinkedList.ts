export class LinkedListNode<T> {
    public next: LinkedListNode<T>;
    public previous: LinkedListNode<T>;
    public data: T;

    public constructor(data: T) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

export class LinkedList<T> {

    protected head: LinkedListNode<T>;
    public constructor() {

    }

    public addNode(data: T) : void {
        var temp = new LinkedListNode<T>(data);
        if (this.head == null) {
            this.head = temp;
        }
        else {
            var curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = temp;
        }
    }

    public printAll() : void {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

export class DoublyLinkedList<T> extends LinkedList<T> {

    public addNode(data: T) : void {
        var temp = new LinkedListNode<T>(data);
        if (this.head == null) {
            this.head = temp;
        }
        else {
            var curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = temp;
            temp.previous = curr;
        }
    }

    public printReverse() : void {
        var curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        do {
            console.log(curr.data);
            curr = curr.previous;
        } while (curr != null);
    }
}
