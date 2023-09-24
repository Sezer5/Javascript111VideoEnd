//OOP GİRİŞ 

class Insan{//Sınıf
    /*
        1-Özellikler
        2-Yapıcı Metod
        3-Function
    
    
    */
    constructor(isim,soyisim,yas,maas){
        //Yapıcı metod
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster(){
        console.log(`İsim : ${this.isim}
        soyisim : ${this.soyisim} 
        Yaş : ${this.yas}
        Maaş : ${this.maas}
        
        
        `)
    }
}

const insan1= new Insan("Sezer","Ünalmış","33","24000");//Nesne oluşturmak 
insan1.bilgileriGoster();

console.log(insan1.isim);