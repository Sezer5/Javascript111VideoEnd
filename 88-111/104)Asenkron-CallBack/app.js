//Call back nedir

//Timing - event - http istekleri 

//Call back - promise - async await işlemleri
//Call back bir fonksiyonu bir fonksiyona parametre geçerek asenkronu senkrona çeviririz
function getName(callback){
    setTimeout(() => {
            console.log("Sezer");
            callback();
    }, 1000);
}

function getSurname(){
    setTimeout(() => {
            console.log("Ünalmış");
    }, 500);
}

getName(getSurname);
// getSurname();