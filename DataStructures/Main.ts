import { LinkedList, DoublyLinkedList } from "./LinkedList";
import { Stack, Queue } from './StackAndQueue';

class Program {
    public static main(): void {
        Program.TestLinkedList();
        Program.TestDoublyLinkedList();
        Program.TestStack();
        Program.TestQueue();
    }

    private static TestLinkedList(): void {
        var list = new LinkedList<number>();
        list.addNode(10);
        list.addNode(100);
        list.addNode(1000);
        list.addNode(100);
        list.addNode(10);
        list.printAll();
    }

    private static TestDoublyLinkedList(): void {
        var list = new DoublyLinkedList<number>();
        list.addNode(10);
        list.addNode(100);
        list.addNode(1000);
        list.addNode(10000);
        list.addNode(100000);
        console.log("Printing right to left");
        list.printReverse();
    }

    private static TestStack(): void {
        var stack = new Stack<number>();
        stack.push(10);
        stack.push(100);
        stack.push(1000);
        stack.push(10000);
        stack.push(100000);
        console.log(stack.peek());
        console.log(stack.pop());
        console.log(stack.pop());
        console.log(stack.pop());
        console.log(stack.pop());
        console.log(stack.pop());
    }

    private static TestQueue(): void {
        var queue = new Queue<number>();
        queue.enqueue(10);
        queue.enqueue(100);
        queue.enqueue(1000);
        queue.enqueue(10000);
        queue.enqueue(100000);
        console.log(queue.peek());
        console.log(queue.dequeue());
        console.log(queue.dequeue());
        console.log(queue.dequeue());
        console.log(queue.dequeue());
        console.log(queue.dequeue());
    }

}

Program.main();