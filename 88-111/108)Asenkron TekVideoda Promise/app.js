// PROMİSE YAZIMI (CALL BACKLERE ALTERNATİF OLARAK YAZILMAKTADIR)

// let check = true ;
// const promise1 = new Promise((resolve,reject)=>{
//     if(check){
//         resolve("Promise başarılı");
//     }else{
//         reject("Promise başarısız");
//     }
// })

// console.log(promise1);


//Asenkron yapıları senkrona çevirmek için kullanıyoruz
// let check = true;

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Promisede sıkıntı yok");
//         }else{
//             reject("Sıkıntı büyük");
//         }
//     })
// }
// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>console.log("Her zaman çalışır"))

//ASENKRON YAPI PROMİSE İLE NASIL YÖNETİLİR?

function readStudents(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }
        xhr.open("GET",url);
        xhr.send();
    })
}

readStudents("students.json")
.then((data)=>console.log(data))//Bu kısmın içinde veya diğerinde duruma göre yeni fonksiyon yazılıp
//async fonksiyon sync fonksiyonlara çevirilebilir
.catch((err)=>console.log(err))