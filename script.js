let year = document.querySelector("#year");
function newYear() {
  year.innerHTML = new Date().getFullYear();
}

newYear();
