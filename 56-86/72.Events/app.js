// function changeTitle(){
//     document.querySelector('.card-title').textContent="Todo Başlığı Değişti";
// }
// function todo3Gizle(){
//     document.querySelector("#todo3").style.display = "none";
// }
const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle);

function changeTitle(e){
    console.log(e);

    clearButton.innerHTML="<b>Deneme</b>";
}