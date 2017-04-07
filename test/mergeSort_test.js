import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('returns mergeSort of an array ', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1,2,3,4,5,6,7,8,9,10])
  })

  it('returns mergeSort of 10 at index 2', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])[2]).to.deep.equal(3)
  })

  it('the mergeSort of array at index 1', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])[2]).to.not.equal(4)
  })

  it('the mergeSort of array at index 2', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])[2]).to.not.equal('3')
  })
})
