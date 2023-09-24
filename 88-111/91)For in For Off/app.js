let names = ["Sezer","Seda","Kevser","Cahit"];
// For in döngüsü
// Geri dönüş olarak index değerlerini verir
// for(let name in names){
//     console.log(name);
// }


//For of Döngüsü 

for ( let isim of names ){
    console.log(isim, names.indexOf(isim));
}