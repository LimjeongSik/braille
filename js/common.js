"use strict";
// 뒤로가기
let prev = document.querySelector(".common-ui-btnprev");
prev.addEventListener("click", () => {
    history.back();
});
let setting = document.querySelector(".common-ui-btnsetting");
setting.addEventListener("click", () => {
    location.href = "setting.html";
});
// level start
const startPopup = document.querySelector(".starting__popup");
const start = document.querySelector(".starting__popup .start");
document.addEventListener("DOMContentLoaded", () => {
    startPopup.style.opacity = "1";
    startPopup.style.visibility = "visible";
});
start.addEventListener("click", () => {
    startPopup.style.opacity = "0";
    startPopup.style.visibility = "hidden";
});
