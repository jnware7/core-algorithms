import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('makeChange()', function(){
  const array = fizzBuzz()
  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array with (numbers not divisible by 3 or 5, Fizz, Buzz, and FizzBuzz)', function(){

      expect(array).to.be.an('Array')
      expect(array[2]).to.equal('Fizz')
  })


  it('returns FizzBuzz', function(){
    expect(array[14]).to.deep.equal('FizzBuzz')
  })

  it('your fizz is buzzing', function(){
    expect(array[0]).to.not.equal('Fizz')
  })


    it('your fizz is buzzing', function(){

      expect(array[16]).to.not.equal('FizzBuzz')
  })
})
