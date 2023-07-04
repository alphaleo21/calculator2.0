function add(a, b) {
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

var currentValue;
var preValue;

function keyPressed(n){
    currentValue = document.getElementById("curScreen").value = document.getElementById("curScreen").value+n;
}

function opPressed(op){
    if(op == '+'){
        currentValue = document.getElementById("curScreen").value = document.getElementById("curScreen").value+'+';
        
    }else if(op == '-'){
        currentValue = document.getElementById("curScreen").value = document.getElementById("curScreen").value+'-';
    }else if(op == '*'){
        currentValue = document.getElementById("curScreen").value = document.getElementById("curScreen").value+'*';
    }else if(op == '/'){
        currentValue = document.getElementById("curScreen").value = document.getElementById("curScreen").value+'/';
    }
}