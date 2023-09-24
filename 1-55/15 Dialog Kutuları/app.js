/*
    -- DİALOG KUTULARI --
        - Alert
        - Prompt
        - Confirm
*/
//prompt kullanıcıdan değer almak için kullanılır
let isim = prompt("İsminizi Giriniz");
let yas = prompt("Yaşınızı Giriniz");
console.log("İsminiz:",isim);
console.log("Yaşınız",yas);

// Buradaki değerlerin hepsi string olarak dönüyor

console.log(typeof isim);

let sonuc = confirm("Kaydetmek istediğinize emin misiniz?");
console.log(sonuc);