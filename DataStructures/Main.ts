import { LinkedList, DoublyLinkedList } from "./LinkedList";

class Program {
    public static main() {
        Program.TestLinkedList();
        Program.TestDoublyLinkedList();
    }

    private static TestLinkedList() {
        var list = new LinkedList();
        list.addNode(10);
        list.addNode(100);
        list.addNode(1000);
        list.addNode(100);
        list.addNode(10);
        list.printAll();
    }

    private static TestDoublyLinkedList() {
        var list = new DoublyLinkedList();
        list.addNode(10);
        list.addNode(100);
        list.addNode(1000);
        list.addNode(10000);
        list.addNode(100000);
        console.log("Printing left to right");
        list.printAll();
        console.log("Printing right to left");
        list.printReverse();
    }

}

Program.main();