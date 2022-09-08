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