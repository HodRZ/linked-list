'use strict'

const { Node } = require('./../modules/Node.js')

describe('test the node module', () => {
    it('creates a node that contains data', () => {
        const newNode = new Node('hod');
        expect(newNode).toBeInstanceOf(Node)
        expect(newNode.val).toEqual('hod');
        expect(newNode.next).toEqual(null)
    })
})