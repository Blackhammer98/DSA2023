

function palNum(n){
    let rev=0;
     let temp=n;
    while(temp!==0){

        let ld=temp%10;
        rev=rev*10+ld;
        temp=Math.floor(temp/10);
        if (rev === n) {
            console.log("no is palindrome")
        }
    }
    return(rev===n)
}
var n;
 n = Number(prompt("Enter number:"));
 if(n!==Number){
     console.log("no is  not palindrome")
 }


var result = palNum(n);
console.log(result )