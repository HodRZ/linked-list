'use strict'

const { SinglyLinkedList } = require('./../modules/List.js');

describe('List Proof of Life', () => {
    it('should create a list', () => {
        const newList = new SinglyLinkedList
        expect(newList).toBeInstanceOf(SinglyLinkedList)
        expect(newList.head).toBeNull()
        expect(newList.tail).toBeNull()
        expect(newList.length).toEqual(0)
    })
})

describe('List unshift', () => {
    it('should add a Node as a Head to empty list', () => {
        const newList = new SinglyLinkedList;
        newList.unshift('5');
        expect(newList.head.val).toEqual('5');
        expect(newList.tail.val).toEqual('5');
        expect(newList.head).toEqual(newList.tail);
        expect(newList.head.next).toBeNull();
        expect(newList.length).toEqual(1);
    });

    it('should add a Node as a head to a non-empty list', () => {
        const newList = new SinglyLinkedList;
        newList.unshift('first');
        newList.unshift('second');
        newList.unshift('third');
        expect(newList.length).toEqual(3);
        expect(newList.head.val).toEqual('third')
        expect(newList.head.next.val).toEqual('second')
        expect(newList.head.next.next.val).toEqual('first')
        expect(newList.tail.val).toEqual('first')
        expect(newList.tail.next).toBeNull()
    });
});

describe('List Push', () => {
    it('should add a Node as a Tail to empty list', () => {
        const newList = new SinglyLinkedList;
        newList.push('5');
        expect(newList.head.val).toEqual('5');
        expect(newList.tail.val).toEqual('5');
        expect(newList.head).toEqual(newList.tail);
        expect(newList.head.next).toBeNull();
        expect(newList.length).toEqual(1);
    });

    it('should add a Node as a Tail to a non-empty list', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        expect(newList.length).toEqual(3);
        expect(newList.head.val).toEqual('first')
        expect(newList.head.next.val).toEqual('second')
        expect(newList.head.next.next.val).toEqual('third')
        expect(newList.tail.val).toEqual('third')
        expect(newList.tail.next).toBeNull()
    });
});

describe('List get by index', () => {
    it('should return a node at a specific index', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const nodeAt0 = newList.get(0);
        const nodeAt1 = newList.get(1);
        const nodeAt2 = newList.get(2);
        const nodeAt4 = newList.get(4);
        const nodeAtMinus = newList.get(-1);
        expect(nodeAt0.val).toEqual('first');
        expect(nodeAt1.val).toEqual('second');
        expect(nodeAt2.val).toEqual('third');
        expect(nodeAt4).toBeNull();
        expect(nodeAtMinus).toBeNull();
    });
});

describe('List insert at index', () => {
    it('should insert a node at a specific index in the list', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.insert(1, 'new second');
        const inserted = newList.get(1);
        const prev = newList.get(0)
        expect(newList.length).toEqual(4);
        expect(prev.next.val).toEqual('new second')
        expect(inserted.next.val).toEqual('second');
    });
    it('should return null if index is less than zero or out of range for the list', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const minusNode = newList.insert(-1, 'minus')
        const ourOfRange = newList.insert(10, 'out of range')
        expect(minusNode).toBeNull()
        expect(ourOfRange).toBeNull()
    });
    it('should insert node as Head if index is 0', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.insert(0, 'new first');
        const inserted = newList.get(0);
        expect(newList.head).toEqual(inserted);
    });
    it('should insert node as Tail if index is equal to list length', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.insert(2, 'new tail');
        const inserted = newList.get(3);
        expect(newList.tail).toEqual(inserted);
    });
});

describe('List delete middle node', () => {
    it('should delete the middle Node from the list', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const middle = newList.middle();
        const prev = newList.get(0);
        expect(middle.val).toEqual('second');
        expect(middle.next).toBeNull();
        expect(newList.length).toEqual(2);
        expect(prev.next.val).toEqual('third')
    });
});

describe('List update', () => {
    it('should update the selected node value', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const updated = newList.update(1, 'updated')
        expect(updated.val).toEqual('updated')
    });
    it('should return null if the selected index is out of range', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const updated = newList.update(5, 'updated')
        expect(updated).toBeNull()
    });
});

describe('List pop', () => {
    it('should pop the tail from the list', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const oldTail = newList.pop();
        expect(newList.tail.val).toEqual('second');
        expect(newList.tail.next).toBeNull();
        expect(oldTail.next).toBeNull();
        expect(oldTail.val).toEqual('third')
        expect(newList.length).toEqual(2)
    });
    it('should empty the list if it contains one node', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        const oldTail = newList.pop();
        expect(newList.tail).toBeNull();
        expect(newList.head).toBeNull();
        expect(oldTail.next).toBeNull();
        expect(oldTail.val).toEqual('first')
        expect(newList.length).toEqual(0)
    });
    it('should return null if the list is empty', () => {
        const newList = new SinglyLinkedList
        const poped = newList.pop()
        expect(poped).toBeNull()
    });
});

describe('List shift', () => {
    it('should remove the head node of a non empty list and replace it with the next', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        const oldHead = newList.shift();
        expect(oldHead.val).toEqual('first');
        expect(oldHead.next).toBeNull();
        expect(newList.head.val).toEqual('second');
        expect(newList.length).toEqual(2);
    });
    it('should empty the list if it contains one node', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        const oldHead = newList.shift();
        expect(newList.tail).toBeNull();
        expect(newList.head).toBeNull();
        expect(oldHead.next).toBeNull();
        expect(oldHead.val).toEqual('first')
        expect(newList.length).toEqual(0)
    });
    it('should return null if the list is empty', () => {
        const newList = new SinglyLinkedList
        const shifted = newList.shift()
        expect(shifted).toBeNull()
    });
});

describe('List delete', () => {
    it('should delete a node at a specific index', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.push('fourth');
        const deleted = newList.delete(2);
        const second = newList.get(1)
        expect(deleted.val).toEqual('third');
        expect(deleted.next).toBeNull();
        expect(second.next.val).toEqual('fourth')
        expect(newList.length).toEqual(3)
    });
    it('should delete the tail node if index is lenght-1', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.push('fourth');
        const oldTail = newList.tail;
        const deleted = newList.delete(3);
        const newTail = newList.tail;
        expect(deleted).toEqual(oldTail);
        expect(deleted.val).toEqual('fourth');
        expect(deleted.next).toBeNull();
        expect(newList.tail).toEqual(newTail)
        expect(newList.length).toEqual(3)
    });
    it('should delete the head node if index is 0', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.push('fourth');
        const oldHead = newList.head;
        const deleted = newList.delete(0);
        const newHead = newList.head;
        expect(deleted).toEqual(oldHead);
        expect(deleted.val).toEqual('first');
        expect(deleted.next).toBeNull();
        expect(newList.head).toEqual(newHead)
        expect(newList.length).toEqual(3)
    });
    it('should empty the list if it contains one node', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        const oldHead = newList.delete(0);
        expect(newList.tail).toBeNull();
        expect(newList.head).toBeNull();
        expect(oldHead.next).toBeNull();
        expect(oldHead.val).toEqual('first')
        expect(newList.length).toEqual(0)
    });
    it('should return null if the list is empty', () => {
        const newList = new SinglyLinkedList
        const shifted = newList.delete(0)
        expect(shifted).toBeNull()
    });
    it('should return null if the index is out of range', () => {
        const newList = new SinglyLinkedList
        newList.push('first');
        newList.push('second');
        newList.push('third');
        newList.push('fourth');
        const shifted = newList.delete(5)
        expect(shifted).toBeNull()
    });
});
describe('List Reset', () => {
    it('should reset a list containing a single node after deleting said node', () => {
        const newList = new SinglyLinkedList;
        newList.push('first');
        const oldHead = newList.resetList();
        expect(newList.tail).toBeNull();
        expect(newList.head).toBeNull();
        expect(oldHead.next).toBeNull();
        expect(oldHead.val).toEqual('first')
        expect(newList.length).toEqual(0)
    });
});