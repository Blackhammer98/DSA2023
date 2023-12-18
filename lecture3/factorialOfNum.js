// function factorial(num){

//  let res=1;
//  for(let i=2;i<=num;i++)
//    res=res*i;

//    return res;
// }

// var num;
// num = prompt("please enter the number");
// var result= factorial(num);
// document.write(result);


// find factorial by recursion method

// function factorial(n){

// if (n===0){
//     return 1;
// }else{
//     return n*factorial(n-1);

//   }
// }

// var n;
// n=prompt("please enter the number");
// var result=factorial(n);
// console.log(result);

function factorial(n) {
  // Base case: if the number is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: multiply the number by the factorial of (n-1)
  else {
    return n * factorial(n - 1);
  }
}
var n = prompt("entr no")

// Example usage
document.write(factorial(n)); // Output: 120 (5*4*3*2*1)




