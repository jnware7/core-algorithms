import { expect } from 'chai'
import { assert } from 'chai'
import binarySearch from '../src/binarysearch'

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('returns the index of a requested number in the middle of an oddly numbered sorted array', function(){
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 4)).to.deep.equal(3)
  })

  it('returns the index of a requested number outside the middle of an oddly numbered sorted array', function(){
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 6)).to.deep.equal(5)
  })

  it('returns the index of a requested number on the edge of an evenly numbered sorted array', function(){
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)).to.deep.equal(3)
  })

  it('does not return the incorrect number when asked for the first number in the array', function(){
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)).to.not.equal(1)
  })

  it('does not return the incorrect number when asked for the last number in the array', function(){
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)).to.not.equal(6)
  })

})
