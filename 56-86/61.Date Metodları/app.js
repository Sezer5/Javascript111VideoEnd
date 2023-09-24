//DATE KUllanımı
let tarih = new Date();
// console.log(tarih);
// console.log(tarih.getHours());

//SET METODLARI

// tarih.setDate(24);
tarih.setHours(tarih.getHours()+2);
yeni_tarih=String(tarih);
console.log(typeof yeni_tarih);