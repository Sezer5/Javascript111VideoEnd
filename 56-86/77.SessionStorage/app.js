//Session Storage Kullanımı

//Değer Ekleme

sessionStorage.setItem("350","Sezer");
sessionStorage.setItem("352","Seda");
sessionStorage.setItem("353","Serkan");
sessionStorage.setItem("355","Sercan");

//Değer Silme

// sessionStorage.removeItem("350");

//Değer Almak

// let deneme = sessionStorage.getItem("352");
// console.log(deneme);

//Hepsini Silmek İçin

// sessionStorage.clear();

//Session Storage Array Yazdırma


let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];

sessionStorage.setItem("names",JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));
console.log(value);