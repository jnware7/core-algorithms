import chai ,{ expect }  from 'chai'
import bubbleSort from '../src/bubbleSort'
chai.use(require("chai-sorted"));

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('expected numbers to be an array )', function(){
const numbers = [ 10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(numbers).to.be.an('array')
  })

  it('expects number to be a sorted array', function(){
  const numbers = [ 10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(numbers).to.not.be.sorted()
  })

  it('expected number to be in ascending order', function(){
  const numbers = [ 10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(bubbleSort(numbers)).to.be.ascending
  })

})
