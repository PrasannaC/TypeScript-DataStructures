import { LinkedList } from "./LinkedList";

class Program {
    public static main(){
        Program.TestLinkedList();
    }

    private static TestLinkedList(){
        var list = new LinkedList();
        list.AddNode(10);
        list.AddNode(100);
        list.AddNode(1000);
        list.AddNode(100);
        list.AddNode(10);
        list.printAll();
    }

}

Program.main();