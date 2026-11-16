//Работа с переменными:
let name1  = 'Кэтрин';
const birth_year = 2000;
let currentYear = 2020;
let userAge = currentYear - birth_year
console.log("\n========== Работа с переменными ==========");
console.log(name1);
console.log(userAge)


//Изучение типов данных:
const age = 24;                  // number
const name = "Екатерина";        // string
const isStudent = true;          // boolean
const emptyValue = null;         // null
let notAssigned;                 // undefined

const student = {
    name: "Екатерина",
    age: 20,
    isStudent: true
};
console.log("\n========== Изучение типов данных ==========");
console.log("age:", typeof age);
console.log("name:", typeof name);
console.log("isStudent:", typeof isStudent);
console.log("emptyValue:", typeof emptyValue);
console.log("notAssigned:", typeof notAssigned);
console.log("student:", typeof student);


//===== Математические операции =====
let firstNumber = 12;
let secondNumber = 4;

// Основные арифметические операции
console.log("\n========== Основные арифметические операции ==========");
console.log("Сложение:", firstNumber + secondNumber);       // 16
console.log("Вычитание:", firstNumber - secondNumber);      // 8
console.log("Умножение:", firstNumber * secondNumber);      // 48
console.log("Деление:", firstNumber / secondNumber);        // 3

// Инкремент и декремент
let counter = 5;
counter++;
console.log("\n========== Инкремент и декремент ==========");
console.log("После инкремента:", counter);                 // 6
counter--;
console.log("После декремента:", counter);                  // 5

// Приоритет операций и скобки
console.log("\n========== Приоритет операций и скобки ==========");
console.log("Без скобок:", 2 + 3 * 4);                     // 14
console.log("Со скобками:", (2 + 3) * 4);                  // 20

// Остаток от деления
console.log("\n========== Остаток от деления ==========");
console.log("Остаток от деления:", 13 % 5);                 // 3


// ===== Работа со строками =====

// Строки в одинарных и двойных кавычках
const firstName = 'Екатерина';
const greeting = "Привет";

// Шаблонная строка: вставка переменной через ${}
const message_greet = `${greeting}, ${firstName}!`;
console.log("\n========== Шаблонная строка: вставка переменной через ${} ==========");
console.log("Шаблонная строка:", message_greet);

// Длина строк
console.log("\n========== Длина строк ==========");
console.log("Длина firstName:", firstName.length);
console.log("Длина greeting:", greeting.length);

// Конкатенация — соединение строк оператором +
const fullGreeting = greeting + ", " + firstName + "!";
console.log("\n========== Конкатенация ==========");
console.log("Конкатенация:", fullGreeting);

// Преобразование строк в числа
const wholeNumber = parseInt("42", 10);
const decimalNumber = parseFloat("3.14");
console.log("\n========== Преобразование строк в числа ==========");
console.log("parseInt:", wholeNumber);
console.log("parseFloat:", decimalNumber);


//Диалоговые окна и вывод:
const message = "Привет! Это сообщение.";

alert(message); // Показывает сообщение во всплывающем окне
console.log("\n========== Диалоговые окна и вывод ==========");
console.log(message); // Выводит сообщение в консоль