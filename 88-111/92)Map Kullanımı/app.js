const map1 = new Map();

map1.set(1,"Sezer");
map1.set(2,"Seda");
map1.set(3,"Kevser");
map1.set(4,"Cahit");

console.log(map1.get(1));
let value = map1.size;
console.log(value);

value = map1.delete(1);
console.log(value);
console.log(map1);

console.log(map1.has(3));

//For of metodu ile map üzerinde dönebiliriz

for(let [key,value] of map1){
    console.log(key,value);
};

for (let key of map1.keys()){
    console.log(key);
}

for (let value of map1.values()){
    console.log(value);
}