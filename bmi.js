const height = parseFloat(prompt("Введите рост в метрах, например 1.70:"));
const weight = parseFloat(prompt("Введите вес в килограммах:"));

const bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
    category = "недостаточный вес";
} else if (bmi < 25) {
    category = "нормальный вес";
} else {
    category = "избыточный вес";
}

const result = `ИМТ: ${bmi}. Категория: ${category}.`;

console.log(result);
alert(result);