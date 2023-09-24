//Elementleri Yer Değiştirmek

const buttonDeneme = document.querySelector("#todoAddButton");

buttonDeneme.innerHTML="<b>Todo Eklemesen De Olur</b>";

const cardBody = document.querySelectorAll(".card-body")[1];
const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent="Todo Listesi - Yeni";

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);