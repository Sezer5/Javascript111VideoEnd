// Var -Let - Const

/*

------ SCOPE (Kapsam) ------

->Global Scope

->Function Scope

->Block Scope


*/

var degiskenismi=10;
console.log(degiskenismi);

var a =5; //global Scope her yerden erişebilirsin


if(true){

}
function method1(){
    var b = 1; //Sadece fonskiyon içinde erişilebilir.
    console.log(b);
}

method1();

//Block Scope

function method2(){

    if(true){
        let a2=2; //Block Scope değişkeni
    }

}

//var : function scope -- ram bellekte çok fazla yer kaplar
// let ve const block scope özelliğine sahiptir.


function selamVer(){
    var selam="herkese selam";
    if(true){
        var b =10;
    }
    console.log(selam);
    console.log(b);
}

selamVer();

var a =5;
var a =10;
console.log(a);

// let a =5;
// let a =10;

// console.log(a);

// let ve const farkı

// const a = 10;
// a=15;
// console.log(a);

let b =5 ;
b=10;
console.log(b);

const user = {
    username : "enes",
    password : "123"


};
user.username="enes bayram";
console.log(user);