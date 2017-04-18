"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var Program = (function () {
    function Program() {
    }
    Program.main = function () {
        Program.TestLinkedList();
    };
    Program.TestLinkedList = function () {
        var list = new LinkedList_1.LinkedList();
        list.AddNode(10);
        list.AddNode(100);
        list.AddNode(1000);
        list.AddNode(100);
        list.AddNode(10);
        list.printAll();
        list.printAll();
    };
    return Program;
}());
Program.main();
