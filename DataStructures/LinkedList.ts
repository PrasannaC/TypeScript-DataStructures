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

    private head: LinkedListNode;
    public constructor() {
        
    }

    public AddNode(data: any) {
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
        while (curr.next != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}
