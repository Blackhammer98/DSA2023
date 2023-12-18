// function countZeroFact(num) {

//  let fact=1;
//  for(let i=2;i<=num;i++)
//    fact=fact*i;
// let res=0;


// while(fact%10===0)
// {
//     res++;
//     fact=fact/10;
// }



//    return res;
// }

// var num;
// num = prompt("please enter the number");
// var result= countZeroFact(num);
// document.write(result);

//Efficient Method to find Trailing  Zeros.

function countZeroFact(num)

{


    let res=0;
    for(let i=5;i<=num;i=i*5){

    res = res+Math.floor(num/i);

    }

    return res ;
}

var num;
num = prompt("please enter the number");
var result = countZeroFact(num);
console.log(result);

