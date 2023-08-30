// document.getElementById("date-s").style.backgroundColor = "red";
// document.getElementById("date-s").style.height = "500px";
// document.getElementById("date-s").style.width = "500px";
// document.getElementById("date-s").style.fontSize = "50px";
document.querySelector("img").src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52qqyY2Mosgxt-Pt00pZy4TqIhCanFTwyLwC-D0z5&s";

document.querySelector("h1").innerHTML = "changed <strong>bro</strong>";
const buttonElement = document.getElementById("date-s");
function clickedButton() {
  buttonElement.innerHTML = Date();
}
buttonElement.addEventListener("click", clickedButton);
buttonElement.classList.add("styling");
