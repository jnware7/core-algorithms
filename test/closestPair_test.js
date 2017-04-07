import { expect } from 'chai'
import closestpair from '../src/closestpair'

describe('closestpair()', function(){

it('should be a function', function(){
expect(closestpair).to.be.a('function')
})

it('returns closest pair of points if compared to first item', function(){
expect(closestpair([ [2,1], [4,0], [-1,0], [5,3], [-2,5], [3,-3], [-2,0], [3,4],
[5,-4],[0,-2]])).to.deep.equal([ [ -1, 0 ], [ -2, 0 ] ])
})

it('returns closest pair of points if compared anywhere else in array', function(){
expect(closestpair([ [4,0], [2,1], [5,3], [-2,5], [3,-3], [-2,0], [3,4],
[-1,0], [0,-2]])).to.deep.equal([ [ -2, 0 ], [ -1, 0 ] ])
})

it('returns the two points given if only two points are given', function(){
expect(closestpair([[4,0], [4,0]])).to.deep.equal([ [4, 0], [4, 0] ])
})

it('returns null if only one point is given', function(){
expect(closestpair([[4,0]])).to.deep.equal([ null, null ])
})

it('does not return the largest distance between two points', function(){
expect(closestpair([ [4,0], [2,1], [5,3], [-2,5], [3,-3], [-2,0], [3,4],
[-1,0], [0,-2]])).to.not.equal([ [ -2, 5 ], [ 5, -4 ] ])
})

it('does not return any points if there is only one point given (since comparing a point with itself makes no sense)', function(){
expect(closestpair([[1, 2]])).to.not.equal([1, 2])
})

})
