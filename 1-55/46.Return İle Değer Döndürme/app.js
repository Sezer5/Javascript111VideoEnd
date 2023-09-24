
let donenDeger=cube(3);
console.log(donenDeger);
function kareAl(sayi){
    let sonuc = sayi**2;
    return sonuc;
}


function cube(sayi){
    let sonuc=sayi**3;
    let kareSonuc=kareAl(sonuc);
    return kareSonuc;
}