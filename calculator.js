const firstNumber = parseFloat(prompt("Введите первое число:"));
const operator = prompt("Введите операцию: +, -, * или /");
const secondNumber = parseFloat(prompt("Введите второе число:"));

let result;

if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    if (secondNumber === 0) {
        result = "На ноль делить нельзя";
    } else {
        result = firstNumber / secondNumber;
    }
} else {
    result = "Неизвестная операция";
}

console.log("Результат:", result);
alert(`Результат: ${result}`);