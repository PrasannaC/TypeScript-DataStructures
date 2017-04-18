"use strict";
exports.__esModule = true;
var LinkedListNode = (function () {
    function LinkedListNode(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    return LinkedListNode;
}());
var LinkedList = (function () {
    function LinkedList() {
        //FOR FUTURE
    }
    LinkedList.prototype.AddNode = function (data) {
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
    };
    LinkedList.prototype.printAll = function () {
        var curr = this.head;
        while (curr.next != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
