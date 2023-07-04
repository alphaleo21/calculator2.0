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
var opValue;

curScreen = document.getElementById("curScreen");
preScreen = document.getElementById("preScreen");

function keyPressed(n){
    
    curScreen.value = curScreen.value+n;
}

function opPressed(op){
    
    preValue = curScreen.value;
    preScreen.value = preScreen.value + curScreen.value;
    curScreen.value = "";
    if(op == '+'){
        curScreen.value = curScreen.value+'+';
        opValue = 1;
    }else if(op == '-'){
        curScreen.value = curScreen.value+'-';
        opValue = 2;
    }else if(op == '*'){
        curScreen.value = curScreen.value+'*';
        opValue = 3;
    }else if(op == '/'){
        curScreen.value = curScreen.value+'/';
        opValue = 4;
    }
}

function allClear(){
    curScreen.value = "";
    preScreen.value = "";
}
function lastClear(){
    var now = curScreen.value;
    now = Math.floor(now/10);
    if(now == 0){
        curScreen.value = "";
    }else{
        curScreen.value = now;
    }
}

function eqPressed(){
    currentValue = curScreen.value;
    curScreen.value = "";
    if(opValue == 1){
        curScreen.value = Math.praseInt(add(preValue, currentValue));
    }
    curScreen.value = preValue;
}