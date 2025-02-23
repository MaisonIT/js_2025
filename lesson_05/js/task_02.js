"use strict"

if (confirm('Почати тестування?')) {
	let even = 0
	let odd = 0
	let resultCounting
	for (let i = 1; i <= 100; i++) {
		const numberRandom = 1 + Math.floor(Math.random() * 1000)
		if (numberRandom % 2 === 0)
			even++
		else
			odd++
	}
	if (even > odd) resultCounting = `Парних більше`
	else if (even === odd) resultCounting = `Однакова кількість`
	else resultCounting = `Непарних більше`
	document.write(`${resultCounting}<br> Парних: ${even}<br> Непарних: ${odd}`)
}


