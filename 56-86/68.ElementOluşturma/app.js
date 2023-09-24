const cardBody = document.querySelectorAll(".card-body")[1];

const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://www.enesbayram.net";
link.target="_blank";
link.innerHTML="Kişisel Web Siteme Git";

cardBody.appendChild(link);

console.log(link);