// // Business Logic
function beepBoop(number) {
    const result = [];

    for (let i = 0; i <= number; i++) {
        let transformedNum = i.toString();

        // Get the last digit
        const lastDigit = transformedNum.charAt(transformedNum.length - 1);

        if (lastDigit === "1") {
            transformedNum = "Beep!";
        } else if (lastDigit === "2") {
            transformedNum = "Boop!";
        } else if (lastDigit === "3") {
            transformedNum = "Won't you be my neighbor?";
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
