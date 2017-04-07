import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if the word is a isPalindrome', function(){
    expect(isPalindrome("anna")).to.deep.equal(true)
  })

  it('returns true if it is a single letter', function(){
    expect(isPalindrome("a")).to.deep.equal(true)
  })

  it('returns false if it is not a isPalindrome', function(){
    expect(isPalindrome("abracadabra")).to.deep.equal(false)
  })

  it('does not equal a isPalindrome if it is not a isPalindrome', function(){
    expect(isPalindrome("banaroo")).to.not.equal(true)
  })
})
