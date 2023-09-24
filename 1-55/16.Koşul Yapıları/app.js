// KOŞUL YAPILARI 

// let not=35;

// if(not>50){
//     console.log("Geçtiniz , notunuz :" + not);
// }else{
//     console.log("Kaldınız notunuz : " + not);
// }

// let yas = Number(prompt("Yaşınız"));

// let butce = Number(prompt("Bütçeniz"));

// if(yas>=18 && butce>=3000){
//     alert("Ehliyet alabilirsiniz");
// }else{
//     alert("Ehliyet alamazsınız");
// }

// DERS ORTALAMALARI BULMA ÖRNEKLERİ

// vize1,vize2,final

let vize1=Number(prompt("Lütfen 1. vizeyi giriniz:"));


let vize2=Number(prompt("Lütfen 2. vizeyi giriniz:"));


let final=Number(prompt("Lütfen final giriniz:"));

let ortalama = (vize1*0.3)+(vize2*0.3)+(final*0.4);

if(ortalama >= 60 && ortalama < 80){
    alert("Dersten Ortalama Geçtiniz");
}else if(ortalama >= 80){
    alert("Dersten İyi Geçtiniz");
}else{
    alert("Kaldınız");
}