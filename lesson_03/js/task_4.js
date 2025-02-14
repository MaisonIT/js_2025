"use sttrict"

// Вводимо дані
const peopleAge = parseInt(prompt(`Введіть скільки вам повних років`))

// Умова та вивід результату
if (peopleAge <= 5)
	document.write(`Ви дитина у садочку`)
else if (peopleAge >= 6 && peopleAge <= 17)
	document.write(`Ви школяр`)
else if (peopleAge >= 18 && peopleAge <= 24)
	document.write(`Ви студент`)
else if (peopleAge >= 25 && peopleAge <= 65)
	document.write(`Ви працівник`)
else document.write(`Ви пенсіонер`)