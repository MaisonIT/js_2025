"use strict"

// Вводимо дані
const a = parseInt(prompt(`Введіть число №1`, ``))
const b = parseInt(prompt(`Введіть число №2`, ``))

// Обчислюэмо вирази
const sum = a + b
const product = a * b
const part = a / b


// Виводемо результат
document.write(`Сумма = ${sum.toFixed(2)} </br>
Добуток = ${product.toFixed(2)} </br>
Частка = ${part.toFixed(2)}
`)