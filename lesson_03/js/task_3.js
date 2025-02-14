"use strict"

// Вводмио дані
const minNumber = 1
const maxNumber = 5
const firstNumberTry = parseInt(prompt(`Введіть перше числло, у вас є дві спроби щоб вгадати число от 1 до 5`))
const secondNumberTry = parseInt(prompt(`Введіть друге числло, у вас є дві спроби щоб вгадати число от 1 до 5`))


const randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))

if (firstNumberTry === randomNumber)
	document.write(`Вгадали з першоі спроби`)
else if (secondNumberTry === randomNumber)
	document.write(`Вгадали з другої спроби`)
else
	document.write(`Не вгадали, закінчились спроби.  <br>
Число було ${randomNumber}	
`)
