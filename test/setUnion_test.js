import { expect } from 'chai'
import { assert } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

it('should be a function', function(){
expect(setUnion).to.be.a('function')
})

it('returns setUnion of two arrays ', function(){
expect(setUnion([1, 2, 3, 4],[2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8])
})

it('returns the length of setUnion of two arrays ', function(){
assert.lengthOf(setUnion([1, 2, 3, 4],[2, 4, 6, 8]),6)
})

it('returns setUnion of two arrays with no duplicates', function(){
expect(setUnion([1, 2, 3, 4],[5, 6, 7, 8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
})

it('the setUnion of two arrays with the same things in them is not different than either', function(){
expect(setUnion([1, 2, 3, 4],[1, 2, 3, 4])).to.not.equal([1, 2, 3, 4, 1, 2, 3, 4])
})

})
