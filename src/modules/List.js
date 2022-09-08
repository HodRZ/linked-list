'use strict'

const { Node } = require('./Node.js')
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    unshift(val) {
        const newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead
        }
        this.length++;
        return this
    }
};

module.exports = { SinglyLinkedList }