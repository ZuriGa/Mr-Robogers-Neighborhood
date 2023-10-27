// // // //Business Logic
function beepBoop(number) {
    let result = " ";
    for (let i = 0; i <= number; i++) {
        let transformedNum = i.toString();
        if (transformedNum.includes("1")) {
            transformedNum = "Beep!";
        } else if (transformedNum.includes("2")) {
            transformedNum = "Boop!";
        } else if (transformedNum.includes("3")) {
            transformedNum = "Won't you be my neighbor?";
        }

        result += transformedNum + " ";
    }
    return result.trim();
}