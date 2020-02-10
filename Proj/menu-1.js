var adobomodal = document.getElementById('simple-adobo');
var adoboBtn = document.getElementById('adoboBtn');
var close1 = document.getElementsByClassName('close1')[0];

adoboBtn.addEventListener('click', open1);
close1.addEventListener('click', close);

function open1(){
    adobomodal.style.display = 'block';
}

function close(){
    adobomodal.style.display = 'none';
}