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
