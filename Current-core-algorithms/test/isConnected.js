import chai ,{ expect }  from 'chai'
import isConnected from '../src/isConnected'


describe('isConnected()', function(){

  it('should be a function', function(){
    expect(isConnected).to.be.a('function')
  })

  it('expected graph to be an object', function(){
    const graph = {
      'a': ['b', 'c'],
      'b': ['a', 'd'],
      'c': ['a', 'd'],
      'd': ['b', 'c'],
    }
    expect(typeof(graph)).to.equal('object')
  })


   it('graph A is connected', function(){
     const graphA = {
       'a': ['b', 'c'],
       'b': ['a', 'd'],
       'c': ['a', 'd'],
       'd': ['b', 'c'],
     }
     expect(isConnected(graphA)).to.equal(true)
   })

   it('graph B is not connected ', function(){
     const graphB = {
   'a': ['b'],
   'b': ['a'],
   'c': ['d'],
   'd': ['c'],
 }
     expect(isConnected(graphB)).to.equal(false)
   })
})
