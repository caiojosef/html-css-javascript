var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    if(currentNumber >= 10){
        increment.disabled = true;
        return;   
    }
    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if(currentNumber <= 0)
    return;
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

