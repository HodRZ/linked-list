'use strict'

const { SinglyLinkedList } = require('./../modules/List.js');

describe('Test the List', () => {
    it('should create a list', () => {
        const newList = new SinglyLinkedList
        expect(newList).toBeInstanceOf(SinglyLinkedList)
        expect(newList.head).toBeNull()
        expect(newList.tail).toBeNull()
        expect(newList.length).toEqual(0)
    })

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
        expect(newList.tail.next).toBeNull
    });
})