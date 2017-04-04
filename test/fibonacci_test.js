import { expect } from 'chai'
import { assert } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns fibonacci to the 10th position', function(){
    assert.lengthOf(fibonacci(10), 10, 'fibonacci`s value has a length of 10');
  })


  it('returns fibonacci of 3rd position', function(){
    expect(fibonacci(3)).to.deep.equal([0,1,1])
  })

  it('the fibonacci of 5th position', function(){
    expect(fibonacci(5)).to.not.equal([0,1,1,2,3])
  })

  it('the fibonacci of 10th is correct', function(){
    expect((fibonacci(10))[9]).to.deep.equal(34)
  })
})
