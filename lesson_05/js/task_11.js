"use strict"

if (confirm('Почати тестування?')) {
	const userStartNumber = parseInt(prompt(`Введіть початкове число`))
	const userEndNumber = parseInt(prompt(`Введіть кінцеве число`))
	let sum = 0
	let count = 0
	let oddNumbers = ''
	for (let i = userStartNumber; i <= userEndNumber; i++) {
		if (i % 2 !== 0) {
			oddNumbers += i + ''
			count++
			sum += i
			if (count === 5) break
		}
	}
	document.write(`Непарні числа: ${oddNumbers}<br>`)
	document.write(`Сумма еепарних: ${sum}`)
}