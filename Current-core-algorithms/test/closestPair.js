import chai ,{ expect }  from 'chai'
import closestPair from '../src/closestPair'


describe('closestPair()', function(){

  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })
  it('should throw error if not an array', function(){
    expect(()=> closestPair(1)).to.throw(Error,'INVALID INPUT')
  })

  it('expected points to be an array ', function(){
    var points = [
      [2,1],
      [4,0],
      [-1,0],
      [5,3],
      [-2,5],
      [3,-3],
      [-2,0],
      [3,4],
      [5,-4],
      [0,-2]
    ]
    expect(points).to.be.an('array')
  })


   it('smallest distance should be 1', function(){
     var points = [
       [2,1],
       [4,0],
       [-1,0],
       [5,3],
       [-2,5],
       [3,-3],
       [-2,0],
       [3,4],
       [5,-4],
       [0,-2]
     ]
     expect(closestPair(points).distance).to.equal(1)
   })

   it('index 0 of point1 should be -1 ', function(){
     const points = [
       [2,1],
       [4,0],
       [-1,0],
       [5,3],
       [-2,5],
       [3,-3],
       [-2,0],
       [3,4],
       [5,-4],
       [0,-2]
     ]
     expect(closestPair(points).point1[0]).to.equal(-1)
   })

   it('index 0 of point1 should be 0 ', function(){
     const points = [
       [2,1],
       [4,0],
       [-1,0],
       [5,3],
       [-2,5],
       [3,-3],
       [-2,0],
       [3,4],
       [5,-4],
       [0,-2]
     ]
     expect(closestPair(points).point1[1]).to.equal(0)
   })
})
