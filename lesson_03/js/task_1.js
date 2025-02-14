"use strict"

// Вводимо дані
const childrenName1 = prompt(`Введіть імʼя першої дитини`)
const childrenName2 = prompt(`Введіть імʼя другої дитини`)
const quanityCandy1 = parseInt(prompt(`Введіть кількість цукерок ${childrenName1}`))
const quanityCandy2 = parseInt(prompt(`Введіть кількість цукерок ${childrenName2}`))

// Створюємо умови, та виводемо результат
if (quanityCandy1 < quanityCandy2)
	document.write(`У ${childrenName2} більше цукерок`)
else if (quanityCandy1 === quanityCandy2)
	document.write(`Однакова кількість цукерок`)
else
	document.write(`У ${childrenName1} більше цукерок`)