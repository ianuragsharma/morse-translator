const translateFrom = document.querySelector(".text-translatefrom");
const translateTo = document.querySelector(".translated-text");
const btnTranslate = document.querySelector("#btn-translate");
const btnReset = document.querySelector("#btn-reset");

btnReset.addEventListener("click", () => {
  translateFrom.value = "";
  translateTo.innerText = "";
});
btnTranslate.addEventListener("click", clickhandler);
function clickhandler() {
  console.log("hello");
  let url =
    "	https://api.funtranslations.com/translate/morse.json" +
    "?" +
    "text=" +
    translateFrom.value;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      translateTo.innerText = json.contents.translated;
      console.log(json.contents.translated);
    })
    .catch(errorHandler);
}

function errorHandler(error) {
  alert(
    "Error occured, " +
      error +
      ".\nSome issue with the server. Please try again later"
  );
}
