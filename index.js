const apiUrl = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById("id-number");
const adviceContent = document.getElementById("content");
const buttonNew = document.getElementById("new");

function setDocument(data) {
  adviceId.textContent = data.slip.id;
  adviceContent.textContent = data.slip.advice;
}

function getData() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Błąd sieci: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setDocument(data);
    })
    .catch((error) => {
      console.error("Wystąpił błąd:", error);
    });
}
document.addEventListener("DOMContentLoaded", getData);
buttonNew.addEventListener("click", getData);
