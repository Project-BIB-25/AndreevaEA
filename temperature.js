const choice = prompt(
    "Введите C для перевода из Цельсия в Фаренгейт или F для обратного перевода:"
);

let result;

if (choice === "C" || choice === "c") {
    const celsius = parseFloat(prompt("Введите температуру в градусах Цельсия:"));
    const fahrenheit = celsius * 9 / 5 + 32;

    result = `${celsius} °C = ${fahrenheit} °F`;
} else if (choice === "F" || choice === "f") {
    const fahrenheit = parseFloat(prompt("Введите температуру в градусах Фаренгейта:"));
    const celsius = (fahrenheit - 32) * 5 / 9;

    result = `${fahrenheit} °F = ${celsius} °C`;
} else {
    result = "Неизвестный вариант";
}

console.log(result);
alert(result);