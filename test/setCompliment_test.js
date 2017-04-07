import { expect } from 'chai'
import { assert } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function(){

it('should be a function', function(){
  expect(setCompliment).to.be.a('function')
})

it('returns setCompliment of two arrays ', function(){
  expect(setCompliment([1, 2, 3, 4],[2, 4, 6, 8]) ).to.deep.equal([ 6, 8 ])
})

it('returns setCompliment of two arrays at index 1 ', function(){
  expect(setCompliment([1, 2, 3, 4],[2, 4, 6, 8])[1]).to.deep.equal(8)
})

it('returns setCompliment of two arrays with no duplicates', function(){
  expect(setCompliment([1, 2, 3, 4],[2, 4, 6, 8])).to.not.equal([ 4,2 ])
})

it('the setCompliment of two arrays with the same things in them is not different than either', function(){
  expect(setCompliment([1, 2, 3, 4],[1, 2, 3, 4])[0]).to.not.equal(2)
})

})
