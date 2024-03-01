var screen = document.getElementById('curScreen');
var show = document.getElementById("preScreen");

var preValue;
var curValue;
var op;
var result;
var operandCount;

function keyPressed(e){
    // if(op != null){
    //     eqPressed();
    // }
    screen.value = screen.value+e;
}

function allClear(){
    screen.value = '';
    preValue = 0;
    curValue = 0;
    operandCount = 0;
}

function lastClear(){
    screen.value = Math.floor(screen.value/10);
}

function opPressed(e){
    if(operandCount == 1){
      performOperation();
      screen.value = preValue;
      show.value = preValue;
      console.log(preValue);
    }else{
      operandCount = 1;
    }
    switch (e) {
      case "+":
        op = 1;
        break;
      case "-":
        op = 2;
        break;
      case "/":
        op = 3;
        break;
      case "*":
        op = 4;
        break;
      default:
        break;
    }
    preValue = +screen.value;
    
    screen.value = "";
}

function performOperation(){
    curValue = +screen.value;
    switch (op) {
      case 1:
        result = preValue + curValue;
        break;
      case 2:
        result = preValue - curValue;
        break;
      case 3:
        result = preValue / curValue;
        break;
      case 4:
        result = preValue * curValue;
        break;
      default:
        break;
    }
    preValue = result;
}

function eqPressed() {
    curValue = +screen.value;
    switch (op) {
      case 1:
        result = preValue + curValue;
        break;
      case 2:
        result = preValue - curValue;
        break;
      case 3:
        result = preValue / curValue;
        break;
      case 4:
        result = preValue * curValue;
        break;
      default:
        break;
    }
    operandCount = 0;
    screen.value = '';
    show.value = '';
    screen.value = result;
}