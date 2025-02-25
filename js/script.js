// Function to calculate factorial
function calculateFactorial() {
    let num = document.getElementById("factorialInput").value;
    let result = document.getElementById("result");

    if (num === "" || isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    num = parseInt(num);
    if (num < 0) {
        result.textContent = "Factorial of negative numbers is undefined.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    result.textContent = `${num}! = ${factorial}`;
}

// Event Listener for Enter Button
document.getElementById("calculateButton").addEventListener("click", calculateFactorial);

// Function to Toggle Dark Mode
function toggleDarkMode(enableDarkMode) {
    document.body.classList.toggle("dark-mode", enableDarkMode);
}
