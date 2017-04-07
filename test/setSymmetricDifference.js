import { expect } from 'chai'
import { assert } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

it('should be a function', function(){
  expect(setSymmetricDifference).to.be.a('function')
})

it('returns setSymmetricDifference of two arrays ', function(){
  expect(setSymmetricDifference([1, 2, 3, 4],[2, 4, 6, 8])).to.deep.equal([1, 3, 6, 8])
})

it('returns setSymmetricDifference of two arrays at index 1 ', function(){
  expect(setSymmetricDifference([1, 2, 3, 4],[2, 4, 6, 8])[3]).to.deep.equal(8)
})

it('returns setSymmetricDifference of two arrays with no duplicates', function(){
  expect(setSymmetricDifference([1, 2, 3, 4],[2, 4, 6, 8])).to.not.equal([1, 2, 3, 4, 2, 4, 6, 8 ])
})

it('the setSymmetricDifference of two arrays with the same things in them is not different than either', function(){
  expect(setSymmetricDifference([1, 2, 3, 4],[1, 2, 3, 4])[0]).to.not.equal([1])
})

})
