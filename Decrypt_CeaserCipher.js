function rot13(str) {
let cipher = str.split('');
let decodedMsg = []
//console.log(str.charCodeAt(0))
//65-90
for(let i = 0 ; i < cipher.length; i++){
  if(cipher[i].charCodeAt(0) === 32 || cipher[i].charCodeAt(0) > 90 || cipher[i].charCodeAt(0) < 65 ){
     decodedMsg.push(String.fromCharCode(cipher[i].charCodeAt(0)))
  }else{
    if(cipher[i].charCodeAt(0) + 13 <= 90){
      decodedMsg.push(String.fromCharCode(cipher[i].charCodeAt(0) + 13) )
    }else{
      decodedMsg.push(String.fromCharCode(65 + (cipher[i].charCodeAt(0) + 13 - 91)) )
    }
    //console.log(decodedMsg. join(''))
  }
  
}
  return decodedMsg.join('');
}

console.log(rot13("SERR YBIR?"))