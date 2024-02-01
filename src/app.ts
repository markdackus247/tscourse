const num1 = document.getElementById("number1")! as HTMLInputElement;
const num2 = document.getElementById("number2")! as HTMLInputElement;
const form = document.getElementById('calcForm')! as HTMLFormElement;


form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(add(Number(num1), Number(num2)));    
});


function add(n1: number, n2: number) {
    return n1 + n2;
}



// console.log(num1, num2, form);