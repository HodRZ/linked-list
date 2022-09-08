'use strict'

const { SinglyLinkedList } = require('./../modules/List.js');

describe('Test the List', () => {
    it('creates a list', () => {
        const newList = new SinglyLinkedList
        expect(newList).toBeInstanceOf(SinglyLinkedList)
        expect(newList.head).toBeNull()
        expect(newList.tail).toBeNull()
        expect(newList.length).toEqual(0)
    })
})