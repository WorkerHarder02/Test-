
var modal = document.querySelector('.myModal');
var btns = document.querySelectorAll('#myBtn');
const p = document.querySelector("#modal_p");
const close = document.querySelector(".close");


for (let btn = 0; btn < btns.length; btn++) {
    btns[btn].onclick = function () {
        modal.style.display = "block";
        p.innerHTML = `модальное окно номер  ` + (btn + 1);
    }

}



window.onclick = function (event) {
    if (event.target == modal || event.target == close) {
        modal.style.display = "none";

    }
}








