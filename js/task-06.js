// const inputText = document.getElementById('validation-input');
// inputText.addEventListener('blur', addBorderColor);
// const dataLength = inputText.getAttribute('data-length');
// function addBorderColor(event) {
//     const valueLength = event.target.value.trim().length;
//     if (Number(dataLength) === valueLength) {
//         inputText.classList.add('valid');
//         inputText.classList.remove('invalid');
//     }
//     else {
//         inputText.classList.add('invalid');
//         inputText.classList.remove('valid');
//     }
// }


const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", onTargettextInputBlur);
function onTargettextInputBlur(event) {
  const inputValueLength = event.target.value.length;
  const validLength = Number(textInput.dataset.length);
  textInput.classList.remove("valid", "invalid");
  if (inputValueLength === validLength) {
    textInput.classList.add("valid");
    return;
  }
  textInput.classList.add("invalid");
}
