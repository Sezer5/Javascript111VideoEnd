// ÇOKLU IF KULLANMAK

/*
    adını ve tckno
    Ad : boş geçilemez
    TCKN: 11 karakterden oluşmalı
*/
let isim=prompt("İsminizi giriniz:");
let tckn=prompt("TCKN giriniz:");
kontrolEt(isim,tckn);
function kontrolEt(ad , tckn){
    if(ad!=""){
        if(tckn.length ==11){
            console.log("Bilgi girişi başarılı");
        }else{
            console.log("TCKN doğru değil");
        };
    }else{
        console.log("Lütfen isim alanını boş geçmeyiniz");
    };
};