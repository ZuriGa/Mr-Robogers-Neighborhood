// // // //Business Logic
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