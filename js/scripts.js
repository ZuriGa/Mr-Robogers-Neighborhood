// // Business Logic
function beepBoop(number) {
    const result = [];

    for (let i = 0; i <= number; i++) {
        let transformedNum = i.toString();

        // Get the last digit
        transformedNum.charAt(transformedNum.length - 1);

        if (transformedNum.includes(3)) {
            transformedNum = "Won't you be my neighbor?";
        } else if (transformedNum.includes(2)) {
            transformedNum = "Boop!";
        } else if (transformedNum.includes(1)) {
            transformedNum = "Beep!";
        }

        result.push(transformedNum) + " ";
    }

    return result;
}


// UI Logic
window.addEventListener("load", function () {
    const userInputField = document.getElementById("userInput");
    const submitButton = document.getElementById("submitButton");
    const resultElem = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const userInput = parseInt(userInputField.value);
        const result = beepBoop(userInput);
        resultElem.textContent = result.join(", ");
        
    });
});
