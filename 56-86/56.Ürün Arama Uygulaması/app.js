let urun1={
    isim : "ACER 1",
    kategori : "Teknoloji",
    fiyat : 6129
}
let urun2={
    isim : "ACER 2",
    kategori : "Teknoloji",
    fiyat : 7129
}

let urun3={
    isim : "ACER 3",
    kategori : "Teknoloji",
    fiyat : 8129
}
let urun4={
    isim : "LENOVO 3",
    kategori : "Teknoloji",
    fiyat : 9129
}
let urun5={
    isim : "LENOVO 4",
    kategori : "Teknoloji",
    fiyat : 10129
}
let urun6={
    isim : "LENOVO 5",
    kategori : "Teknoloji",
    fiyat : 11129
}

let urunler=[urun1,urun2,urun3,urun4,urun5,urun6];
let filtreliUrunler=[];
let kullaniciUrunIsmi=prompt("Ürün ismi giriniz");
getFiltreliUrunleriDoldur(urunler);
getFiltreliUrunleriYazdir(filtreliUrunler);

function getFiltreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi,0)){
            filtreliUrunler.push(urun);
        }
    });
}

function getFiltreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("--------------------------------------------");
        console.log("|"+urun.isim+"|"+urun.fiyat+"|"+urun.kategori);
        console.log("--------------------------------------------");
    });
}