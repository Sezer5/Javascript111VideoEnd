//Selectors (Seçiciler ve stil özellikleri)
//Class , id ,tag names

//getElementById idye göre elementi yakalamaya yarar


// const button = document.getElementById("toDoname");

// console.log(button);
// console.log(button.id);

// console.log(button.getAttribute("id"));
// const classListesi = button.classList[0];
// let ButtonText = button.textContent;
// console.log(ButtonText);

//button.textContent = "<b>To Do ekle</b>";

// button.innerHTML = "<b>To Do Ekle</b>";
// const ButtonDeneme = document.getElementsByClassName("btn");

// console.log(ButtonDeneme);

// getElementsByTagName html tag etiketleri ile yakalar

// const forms = document.getElementsByTagName("form");

// console.log(forms[0].name);

//getElementById - getElementByClassName - getElementByTagName

// querySelector - querySelectorAll(Birden fazla aynı seçimden varsa kullanılır bir nevi çoğulu anlamında kullanılır)

//const clearButton = document.querySelector("#toDoname");
//const clearButton = document.querySelectorAll(".btn")[0];
const clearButton = document.querySelectorAll("button:first-child");
console.log(clearButton);