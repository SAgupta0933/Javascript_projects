//Counter program

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const counterbox = document.getElementById("counterbox");

let Counter = 0;

decreasebtn.onclick = function(){
    Counter--;
    counterbox.textContent = Counter;
}
resetbtn.onclick = function(){
    Counter=0;
    counterbox.textContent = Counter;
}
increasebtn.onclick = function(){
    Counter++;
    counterbox.textContent = Counter;
}