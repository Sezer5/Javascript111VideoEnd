//Destructing Kullanımı
// console.log("Merhaba");


// let langs = ["C#","C++","JavaScript","Python"];

// let [lang1,lang2,lang3,lang4] = langs;
// console.log(lang1,lang2,lang3,lang4);

// const hesapla = (a,b)=>{
//     const toplam = a+b;
//     const cikar = a-b;
//     const carp = a*b;
//     const bol = a/b;

//     const dizi = [toplam,cikar,carp,bol];
//     return dizi;

// }

// let [a,b,c,d] = hesapla(10,2);
// console.log(a,b,c,d);

const person = {
    name:"Sezer",
    surname:"Ünalmış",
    age:"33",
    salary:"3200"
}

let {name,surname,age,salary}=person;
console.log(name,surname,age,salary);