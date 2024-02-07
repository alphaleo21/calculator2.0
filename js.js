var screen = document.getElementById('curScreen');
var preValue;
var curValue;
var op;
var result;

function keyPressed(e){
    screen.value = screen.value+e;
}

function allClear(){
    screen.value = '';
}

function lastClear(){
    screen.value = Math.floor(screen.value/10);
}

function opPressed(e){
    preValue = +(screen.value);
    screen.value = '';
    switch(e){
        case '+':
            op = 1;
            break;
        case '-':
            op = 2;
            break;
        case '/':
            op = 3;
            break;
        case '*':
            op = 4;
            break;
        default:
            break;
    }
}

function eqPressed() {
    curValue = +(screen.value);
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
    screen.value = '';
    screen.value = result;
}