
import { expect } from 'chai'
import { assert } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

it('should be a function', function(){
  expect(setIntersection).to.be.a('function')
})

it('returns setIntersection of two arrays ', function(){
  expect(setIntersection([1, 2, 3, 4],[2, 4, 6, 8]) ).to.deep.equal([ 2, 4 ])
})

it('returns setIntersection of two arrays at index 1 ', function(){
  expect(setIntersection([1, 2, 3, 4],[2, 4, 6, 8])[1]).to.deep.equal(4)
})

it('returns setIntersection of two arrays with no duplicates', function(){
  expect(setIntersection([1, 2, 3, 4],[2, 4, 6, 8])).to.not.equal([ 4,2 ])
})

it('the setIntersection of two arrays with the same things in them is not different than either', function(){
  expect(setIntersection([1, 2, 3, 4],[1, 2, 3, 4])[0]).to.not.equal(2)
})

})
