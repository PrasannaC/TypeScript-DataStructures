import { LinkedList, LinkedListNode } from './LinkedList';

export class Stack<T> extends LinkedList<T> {

    public push(data: T): void {
        if (this.head == null) {
            this.head = new LinkedListNode(data);
        }
        else {
            var temp = new LinkedListNode(data);
            temp.previous = this.head;
            this.head = temp;
        }
    }

    public addNode(data: T) {
        throw "Not implemented for Stack. Use push";
    }

    public pop(): T {
        if (this.head == null)
            return null;
        else {
            var returnVal = this.head.data;
            this.head = this.head.previous;
            return returnVal;
        }
    }

    public peek(): T {
        if (this.head == null)
            return null;
        else {
            return this.head.data;
        }
    }
}


export class Queue<T> extends LinkedList<T> {

    public enqueue(data: T): void {
        super.addNode(data);
    }

    public addNode(data: T) {
        throw "Not implemented for Queue. Use enqueue";
    }

    public dequeue(): T {
        if (this.head == null)
            return null;
        else {
            var returnVal = this.head.data;
            this.head = this.head.next;
            return returnVal;
        }
    }
    public peek(): T {
        if (this.head == null)
            return null;
        else {
            return this.head.data;
        }
    }
}
