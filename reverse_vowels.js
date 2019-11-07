/**
 * @param {string} s
 * @return {string}
 */
 Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
 
var reverseVowels = function(s) {
    // aeiou
    
    let hash = {
      a: true,
      e: true,
      i: true,
      o: true,
      u:true
    }
    
    let lp = 0 
    let rp = s.length - 1
    s = s.split('')
    while(lp < rp){
      let leftV = s[lp].toLowerCase()
      let rightV = s[rp].toLowerCase()
      if(hash[leftV] && hash[rightV]){
          swap(s,lp,rp)
          lp++
          rp--
      }else if(hash[leftV] || hash[rightV]){
        if(hash[leftV] != true){
          lp++
        }else {
          rp--
        }
      }else {
        lp++
        rp--
      }
      
    }
    
    return s.join('')
};

function swap(str,l,r){
let temp = str[l]
str[l] = str[r]
str[r] = temp
}
