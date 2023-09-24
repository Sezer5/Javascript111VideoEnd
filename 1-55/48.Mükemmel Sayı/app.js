


isPerfectNumber(6);

function isPerfectNumber(number){
    let toplam=0;
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam=toplam+1+number;
    if(toplam==number*2){
        alert("Mükemmel Sayıdır");
    }else{
        alert("Mükemmel Sayı Değildir");
    }
}