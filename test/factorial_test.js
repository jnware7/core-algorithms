import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns factorial of 5 as 120', function(){
    expect(factorial(5)).to.deep.equal(120)
  })

  it('returns factorial of 3 as 6', function(){
    expect(factorial(3)).to.deep.equal(6)
  })

  it('the factorial of 5 is not 125', function(){
    expect(factorial(5)).to.not.equal(125)
  })

  it('the factorial of 3 is not 15', function(){
    expect(factorial(3)).to.not.equal(15)
  })
})
