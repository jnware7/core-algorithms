
 export default function isPalindrome(string){
    var string1 = string.split("").reverse().toString()
    var string2 = string.split("").toString()

        if(string1 == string2){
          return true
        }
        return false
      }


// isPalindrome('hannah')
