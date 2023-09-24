//DECİMAL TO BİNARY


converDecimalToBinary(10);
function converDecimalToBinary(number){
    let binary="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;
        }
    }
    let result=reverse(binary);
    console.log("Sonuc: "+result);
}

function reverse(binary){
    let reversebinary="";
    for(let i=binary.length-1;i>=0;i--){
        reversebinary+=binary.charAt(i);
    }
    return reversebinary;
}