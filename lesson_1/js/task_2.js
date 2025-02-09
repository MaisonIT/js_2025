"use strict"

// Вводимо дані
const birthYear = parseInt(prompt(`Введіть рік народження`, ``))
const currentYear = 2025

// Обчислюємо вираз
const age = currentYear - birthYear

// Виводемо результат
document.write(`Тобі ${age}`)