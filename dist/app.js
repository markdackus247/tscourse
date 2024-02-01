const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const form = document.getElementById('calcForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(add(Number(num1), Number(num2)));
});
function add(n1, n2) {
    return n1 + n2;
}
// console.log(num1, num2, form);
//# sourceMappingURL=app.js.map