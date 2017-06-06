import chai ,{ expect }  from 'chai'
import binarySearch from '../src/binarySearch'
chai.use(require("chai-sorted"));

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('expected numbers to be an array )', function(){
  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(numbers).to.be.an('array')
  })

  it('expects number to be a sorted array', function(){
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(numbers).to.be.sorted()
  })

  it('expected to include 45', function(){
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(numbers).to.include(45)
  })
  it('binarySearch returns the index of 45',function(){
      const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      expect(binarySearch(numbers, 45)).to.deep.equal(8)
  })

   it('index of 45 is 8', function(){
     const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
     expect(numbers.indexOf(45)).to.equal(8)
   })
})
