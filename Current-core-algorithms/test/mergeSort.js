import chai ,{ expect }  from 'chai'
import mergeSort from '../src/mergeSort'
chai.use(require("chai-sorted"));

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })
  it('should throw error if not an array', function(){
    expect(()=> mergeSort(1)).to.throw(Error,'INVALID INPUT')
  })

  it('expected array to be an array )', function(){
  var array = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(array).to.be.an('array')
  })

  it('expects array to be a sorted array', function(){
    var array = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(mergeSort(array)).to.be.sorted()
  })

   it('index of 10 is 9', function(){
     var array = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
     expect((mergeSort(array)).indexOf(10)).to.equal(9)
   })
   it('index of 5 is 4', function(){
     var array = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
     expect((mergeSort(array)).indexOf(5)).to.equal(4)
   })
})
