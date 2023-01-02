var btnTranslate = document.getElementById("btn-translate");
var txtinput = document.getElementById("txt-input");
var outputDiv = document.getElementById("output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

getTranslatedUrl = (text) => serverURL + "?" + "text=" + text;

errorHandler = (error) => {
    console.log('Error Occured', error);
    alert("Something is wroong with server! try again after some time")
}

btnTranslate.addEventListener("click", eventHandler)

function eventHandler() {
    inputText = txtinput.value;
    fetch(getTranslatedUrl(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};