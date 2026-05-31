const calculate = confirm("Should I calculate the square root?");

if (calculate) {
    const number = Number(prompt("Enter a number:"));

    if (number < 0) {
        document.body.innerHTML =
            "The square root of a negative number is not defined";
    } else {
        document.body.innerHTML =
            "The square root of " + number + " is " + Math.sqrt(number);
    }
} else {
    document.body.innerHTML =
        "The square root is not calculated.";
}