function add(
    n1: number,
    n2: number,
    showResult: boolean): number {

    if (showResult) {
        console.log(`showResult is true ${n1 + n2}`);
    } else {
        return n1 + n2;
    }
}

const num1 = document.getElementById("number1")! as HTMLInputElement;
const num2 = document.getElementById("number2")! as HTMLInputElement;
const form = document.getElementById('calcForm')! as HTMLFormElement;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(add(Number(num1.value), Number(num2.value), true));
});
