let mesaj =`Migrosa Hoşgeldiniz.Money Kartınız var mı?
    1-Evet
    2-Hayır

`;

const urunler = [
    {
        urunIsmı:"Süt",
        fiyat:15
    },
    {
        urunIsmı:"Bebek Bezi",
        fiyat:15
    },
    {
        urunIsmı:"Kuşbaşı",
        fiyat:215
    },
]
let sonuc = confirm(mesaj);
let odenecekTutar;
if(sonuc){
    let isim = prompt("Lütfen müşteri ismi giriniz");
    let soyisim = prompt("Lütfen soyisim giriniz");
    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    let odenecekTutar = musteri.hesapla();
    alert(`Müşteri bilgileri : ${isim} ${soyisim}
    Ödenecek Tutar : ${odenecekTutar}
    `)
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    let odenecekTutar = musteri.hesapla();

    alert(`
    Ödenecek Tutar : ${odenecekTutar}
    `)
}