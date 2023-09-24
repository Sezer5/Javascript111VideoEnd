let sayi=Number(prompt("Lütfen Sayı Giriniz"));
let flag=0;
if(sayi==1){
    alert("1 Rakamı Girdiniz");
}else{
    for(let i=2;i<sayi;i++){
        if(sayi%i==0){
            flag=1;
        };
    };
    if(flag==1){
        console.log("Sayı asal değildir");
    }else{
        console.log("Sayı asaldır");
    }
};