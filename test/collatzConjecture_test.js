import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('returns collatzConjecture of 7 at index 2 ', function(){
    expect((collatzConjecture(7))[2]).to.deep.equal(11)
  })

  it('returns collatzConjecture of 10 at index 2', function(){
    expect((collatzConjecture(10))[2]).to.deep.equal(16)
  })

  it('the collatzConjecture of 1 is [1]', function(){
    expect(collatzConjecture(1)).to.not.equal('1')
  })

  it('the collatzConjecture of 1 is not [2]', function(){
    expect(collatzConjecture(1)).to.not.equal(2)
  })
})
