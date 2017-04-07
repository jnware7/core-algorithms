import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('returns bubbleSort of an array ', function(){
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1,2,3,4,5,6,7,8,9,10])
  })

  it('returns bubbleSort of 10 at index 2', function(){
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])[2]).to.deep.equal(3)
  })

  it('the bubbleSort of array at index 1', function(){
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])[2]).to.not.equal(4)
  })

  it('the bubbleSort of array at index 2', function(){
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])[2]).to.not.equal('3')
  })
})
