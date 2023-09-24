//SET

const set = new Set();
set.add("true");
set.add(true);
set.add(7);
set.add("Sezer");
set.add({username:"Sezer",password:"123"});
set.add([1,2,3,4]);

//Uzunluk gösterir
console.log(set.size);

//delete

set.delete("Sezer");
console.log(set.size);
//Değer var mı yok mu onu sorgulamak için kullanılır.
console.log(set.has(7));

//For of döngüsü

for(let value of set){
    console.log(value);
}