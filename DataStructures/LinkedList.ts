class LinkedListNode {
    public next: LinkedListNode;
    public previous: LinkedListNode;
    public data: any;

    public constructor(data: any) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

export class LinkedList {

    protected head: LinkedListNode;
    public constructor() {

    }

    public addNode(data: any) {
        var temp = new LinkedListNode(data);
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

    public printAll() {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

export class DoublyLinkedList extends LinkedList {

    public addNode(data: any) {
        var temp = new LinkedListNode(data);
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

    public printReverse() {
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
