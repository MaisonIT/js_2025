"use sttrict"

// Вводимо дані
const sm = parseInt(prompt(`Введіть довжину в см`, ``))

// Обчислюємо результат
const m = sm / 100
const km = sm / 100000

// Виводемо результат
document.write(`${m}m </br>
	${km} km
	`)