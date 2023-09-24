
number=prompt("Enter The Decimal");
findnumber(number);
function findnumber(number){
    number_rev=reverse(number);
    let result=0;
    for(let i=0;i<=number.length-1;i++){
        result=result+(number.charAt(i)*(2**i));
    }
    alert(result);
}
function reverse(number){
    let reversebinary="";
    for(let i=number.length-1;i>=0;i--){
        reversebinary+=number.charAt(i);
    }
    return reversebinary;
}