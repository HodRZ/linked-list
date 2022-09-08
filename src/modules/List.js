'use strict'

const { Node } = require('./Node.js')
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let entry = this.head;
        for (let i = 0; i < idx; i++) {
            entry = entry.next
        }
        return entry
    }
    insert(idx, val) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === 0) return this.unshift(val);
        if (idx === (this.length - 1)) return this.push(val);
        const inserted = new Node(val)
        const prev = this.get(idx - 1);
        inserted.next = prev.next;
        prev.next = inserted;
        this.length++;
        return this
    }
    middle() {
        const removed = this.get(Math.floor(this.length / 2));
        const prev = this.get(Math.floor(this.length / 2) - 1);
        prev.next = removed.next;
        removed.next = null;
        this.length--;
        return removed
    }
};

module.exports = { SinglyLinkedList }