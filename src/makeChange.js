 export default function makeChange({price, amountGiven}) {


    var change = Math.floor(amountGiven - price)
    var coins = {
      quarters: 25,
      dimes:10,
      nickels:5,
      pennies:1
    }

    var sum = 0
     var changeObject = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
      }


      for(var values in coins){
         while( change - sum >= coins[values] ){
          sum += coins[values]
          changeObject[values] ++
      }
    }



  return changeObject
}
makeChange({price: 100, amountGiven: 151})
