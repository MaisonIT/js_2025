"use strict"

// Вводимо дані
const sec = parseInt(prompt(`Введіть кількість секунд`, ``))
const hour = 3600
const minute = 60

// Обчислюємо вирази
const hourTime = sec / hour
const minuteTime = sec / minute

// Виводемо результат
document.write(`${minuteTime} хвилини </br>
	${hourTime} години
	`)