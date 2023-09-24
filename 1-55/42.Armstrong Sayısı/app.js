let sayi=prompt("Sayı Giriniz");
let toplam=0;
for(let i=0;i<sayi.length;i++){
    let rakam=sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert("Sayı armstrong");
}else{
    alert("sayı armstrong değil");
}