function add(n1, n2, showResult) {
    if (showResult) {
        console.log(`showResult is true ${n1 + n2}`);
    }
    else {
        return n1 + n2;
    }
}
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const form = document.getElementById('calcForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(add(Number(num1.value), Number(num2.value), true));
});
