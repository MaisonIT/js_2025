"use strict"

// Вводимо дані
const minMonth = 1
const maxMonth = 12

// Генеруємо випадкове число
const monthNumber = minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1))

// Вводимо дані
const minDay = 0
const maxDay = 6

// Генеруємо випадкове число
const dayNumber = minDay + Math.floor(Math.random() * (maxDay - minDay + 1))

// Обчислюємо сумму випадкових чісел
const sumDayMonth = monthNumber + dayNumber


// Виводемо результат
document.write(`Випадковий номер місяця - ${monthNumber}</br>
	Випадковий номер дня - ${dayNumber}</br>
	Сумма випадкових номерів дня та місяця - ${sumDayMonth}
	`)