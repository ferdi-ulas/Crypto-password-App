const RightTextArea = document.querySelector("#RightTextArea");
const LeftTextArea = document.querySelector("#LeftTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");
const cleanButton = document.querySelector("#cleanButton");

runEventListeners();

function runEventListeners() {
  encodeButton.addEventListener("click", encode);
  decodeButton.addEventListener("click", decode);
  cleanButton.addEventListener("click", clean);
}

function encode() {
  if (LeftTextArea.value == "") {
    alert("Lütfen Bir Şifre Giriniz.");
    return;
  }
  RightTextArea.value = btoa(unescape(encodeURIComponent(LeftTextArea.value)));
  LeftTextArea.value = "";
}

function decode() {
  LeftTextArea.value = decodeURIComponent(escape(atob(RightTextArea.value)));
  RightTextArea.value = "";
}

function clean() {
  LeftTextArea.value = "";
  RightTextArea.value = "";
}
