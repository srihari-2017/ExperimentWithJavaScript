const { test, expect } = require('@jest/globals')
const { array } = require('yargs')
const cloneArray = require('./cloneArray')

test('properly cloning an array',() => {
    var array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)    
})
