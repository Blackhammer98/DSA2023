// program for finding no.digits
function countDigits(num){
var res = 0;

     while (num > 0){
      num = Math.floor(num / 10) ;
       res++;
     
  }
    return res;
}

  var num ;
 
   num = Number(prompt("Enter number:"));


var result = countDigits(num);
console.log(result);