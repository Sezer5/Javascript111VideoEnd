//Static Anahtar Kullanımı
class Matematik{
    static topla(a,b){
        console.log(a+b);
    }
    cikar(a,b){
        console.log(a-b);
    }
    carp(a,b){
        console.log(a*b);
    }
    bol(a,b){
        console.log(a/b);
    }
}

// const matematik = new Matematik();
// matematik.topla(3,4);
//Statik olarak tanımlanmamışsa nesne üzerinden değilse sınıf üzerinden erişmek gerekir
Matematik.topla(3,5);

//Bir function veya özellik static ise class'a özgüdür değilse nesneye özgüdür  