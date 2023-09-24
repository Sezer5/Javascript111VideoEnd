let dizel = 24.53, benzin=22.25,lpg=11.1;
const yenisatir="\r\n";

const yakitMetni ="1-Dizel"+yenisatir+"2-Benzin"+yenisatir
+"3-LPG"+yenisatir+"Yakıt Türü Seçiniz";

let yakitTipi=Number(prompt(yakitMetni));
let yakitLitresi=Number(prompt("Litre Giriniz"));
let bakiye=Number(prompt("Bakiye Giriniz"));
if(yakitTipi==1){
    let tutar=yakitLitresi*24.53;
    let sonuc = bakiye-tutar;
    const metinsonucu ="Tutar"+tutar+yenisatir+"Bakiyeniz"+sonuc+yenisatir;
    alert(metinsonucu);
}else if(yakitTipi==2){
    let tutar=yakitLitresi*22.25;
    let sonuc = bakiye-tutar;
    const metinsonucu ="Tutar"+tutar+yenisatir+"Bakiyeniz"+sonuc+yenisatir;
    alert(metinsonucu);
}else if(yakitTipi==3){
    let tutar=yakitLitresi*11.1;
    let sonuc = bakiye-tutar;
    const metinsonucu ="Tutar"+tutar+yenisatir+"Bakiyeniz"+sonuc+yenisatir;
    alert(metinsonucu);
}else{
    alert("Geçerli bir yakıt tipi giriniz")
};