'use strict';
// 뒤로가기
let prev = document.querySelector('.common-ui-btnprev');
prev.addEventListener('click',()=>{
  history.back();
});
