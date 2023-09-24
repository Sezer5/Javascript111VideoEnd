/*
    ?VERİ TİPLERİ

    1.String
    2.Number
    3.Boolean
    4.Null
    5.Undefined
    6.Object
    7.Function
*/

let isim = "Sezer";
console.log(typeof isim);

let sayi1=10;

console.log(typeof sayi1);

//Boolean true ve false'dan oluşur

console.log(5>2);

// NULL VERİ TİPİ
let a = null ;

console.log(a);


// UNDEFİNED

let ab;

console.log(ab);


// OBJECT


let insan = {
    isim : "Sezer",
    cinsiyet : "Erkek",
    yas : 33


};


console.log(insan);
console.log(typeof insan);

//Function 

let func = function(){
    console.log("Deneme");
};
func();
console.log(func);