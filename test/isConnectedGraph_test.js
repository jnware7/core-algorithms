import { expect } from 'chai'
import isConnectedGraph from '../src/isConnectedGraph'

describe('isConnectedGraph()', function(){

it('should be a function', function(){
expect(isConnectedGraph).to.be.a('function')
})

it('returns true if graph is connected', function(){
expect(isConnectedGraph({
  'a': ['b', 'c'],
  'b': ['a', 'd'],
  'c': ['a', 'd'],
  'd': ['b', 'c'],
})).to.deep.equal(true)
})

it('returns false if graph is not connected', function(){
expect(isConnectedGraph({
  'a': ['b'],
  'b': ['a'],
  'c': ['d'],
  'd': ['c'],
})).to.deep.equal(false)
})

it('returns false if a graph only has no edges', function(){
expect(isConnectedGraph({
  'a': [],
  'b': [],
  'c': [],
  'd': [],
})).to.deep.equal(false)
})

})
