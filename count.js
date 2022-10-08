let num =0;
const numDisplay = document.querySelector('#display');
function increment(){
    num = num + 1;
   numDisplay.innerHTML = num;
}
function decrement(){
    num = num - 1;
    numDisplay.innerHTML = num;
}
function reset(){
    num = 0;
    numDisplay.innerHTML = num;
}