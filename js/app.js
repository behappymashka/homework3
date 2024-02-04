let operation = prompt("Какую операцию хотим сделать add, sub, mult, div ?");
let x = parseInt(prompt("Введите первое число:"));
let y = parseInt(prompt("Введите второе число:"));

let result;
let operatorSymbol;
(operation === 'add' && (result = x + y)) && (operatorSymbol = '+') ||
(operation === 'sub' && (result = x - y)) && (operatorSymbol = '-') ||
(operation === 'mult' && (result = x * y)) && (operatorSymbol = '*') ||
(operation === 'div' && (result = x / y)) && (operatorSymbol = '/');

result ? alert(`Результат: ${x} ${operatorSymbol} ${y} = ${result}`) : alert("Действие не определено");
