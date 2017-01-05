'use strict'

import { expect } from 'chai'
import makeChange from '../src/makeChange'

describe('makeChange()', function(){

  it('should be a function', function(){
    expect(makeChange).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function(){
    const price = 1.00
    const amountGiven = 1.00

    const change = makeChange({price, amountGiven})
    expect(change).to.be.an('object')
    expect(change).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(change).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    })
  })

  it('returns correct change', function(){
    const price = 1.00
    const amountGiven = 1.41

    expect(makeChange({price, amountGiven})).to.deep.equal({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    })
  })

  it('minimizes the number of coins given by using the most high-value coins', function(){
    expect(makeChange({price: 1.00, amountGiven: 1.68})).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    })

    expect(makeChange({price: 1.00, amountGiven: 1.71})).to.deep.equal({
      quarters: 2,
      dimes: 2,
      nickels: 0,
      pennies: 0,
    })
  })
})
