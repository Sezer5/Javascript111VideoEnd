// Dizinin Metotları
/*
push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler , eleman sayısını döner
shift   : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

toString: diziyi stringe çevirebiliriz.
join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

concat  : dizileri birleştirmek için kullanılır.
slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length  : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirmek
split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar

*/

let arabalar=["Bmw","Mercedes","Ferrari","Porsche","Volvo","Renault","Chevrolet","Fiat","Seat","Tofaş","Lamborghini"];
let arabalar2=["Bmw","Mercedes","Ferrari","Porsche","Volvo","Renault","Chevrolet","Fiat","Seat","Tofaş","Lamborghini"];

// arabalar.push("Opel");
// console.log(arabalar);

// arabalar.unshift("Hyundai");
// console.log(arabalar);

// arabalar.pop();
// console.log(arabalar);


// arabalar.shift();
// console.log(arabalar);

//SPLİCE METODU

// arabalar.splice(2,0,"Chevy");
// console.log(arabalar);


// arabalar.splice(2,2);
// console.log(arabalar);

// let stringarabalar=arabalar.toString();
// console.log(stringarabalar);

//JOIN METODU

// let stringarabalar=arabalar.join("-");
// console.log(stringarabalar);

//CONCAT METODU

// let birlesik_dizi=arabalar.concat(arabalar2);
// console.log(birlesik_dizi);

//SLICE METODU

// console.log(arabalar);
// let ayri_dizi=arabalar.slice(2,5);
// console.log(ayri_dizi);

//LENTGH ÖZELLİĞİ

//console.log(arabalar.length);

//REVERSE METODU

// let tersarabalar=arabalar.reverse();
// console.log(tersarabalar);

//SPLİT METODU

// let isimler="Enes,Sezer,İshak";
// let isimler_dizi=isimler.split(",");
// console.log(isimler_dizi);

//INDEXOF

// let index=arabalar.indexOf("Ferrari");
// console.log(index);

//Includes Metodu

let sonuc=arabalar.includes("Ferrari");
console.log(sonuc);