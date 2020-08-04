                            // Random pin generation

document.getElementById("generate-pin").addEventListener('click', function () {
    let randomNum = Math.round((Math.random() * 9000)+1000);
    document.getElementById("pinGenarateScreen").value = randomNum;  
})
                            //Input submit

function inputNumber(number) {
    
    let display = document.getElementById("inputScreen").value;
    display=display+number;
    document.getElementById("inputScreen").value = display;
}
                            // Backspace functionality  
function backSpace() {
    let displayInput = document.getElementById("inputScreen").value;
    let displayResult = displayInput.slice(0, displayInput.length - 1);
    document.getElementById("inputScreen").value = displayResult;

}
                            // Clear all functionality
function clearAll() {

    document.getElementById("inputScreen").value = "";
}

document.getElementById("check-value").addEventListener('click', function () {
    let pinValue = document.getElementById("pinGenarateScreen").value;
    let pinLength = pinValue.length;
    let inputValue= document.getElementById("inputScreen").value;
    let inputLength = inputValue.length;
    if (pinLength=="" || inputLength=="") {
        alert('Please Generate Random Number & Put Your Pin')
    }

    else if (pinLength == inputLength && pinValue == inputValue) {
        document.getElementById("inputScreen").value = '';
        document.getElementById("pinMatched").style.display = "block";
        document.getElementById("pinNotMatched").style.display = "none";
        // document.getElementById("check-value").disabled = true;
    }
    else{
        document.getElementById("inputScreen").value = '';
        document.getElementById("pinNotMatched").style.display = "block";
        document.getElementById("pinMatched").style.display = "none";
        let attempt = document.getElementById("attemt-left").innerText;
        let attemptInt = parseInt(attempt)
        attemptInt--;
        document.getElementById("attemt-left").innerText = attemptInt;
        if (document.getElementById("attemt-left").innerText==0) {
            document.getElementById("check-value").disabled = true;
        }

    }  
})



