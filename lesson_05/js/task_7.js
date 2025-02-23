"use strict"

if (confirm('Почати тестування?')) {
	document.write(`<div>`)
	let userSectionNumber = parseInt(prompt(`Введіть кількість параграфів`))
	for (let i = 1; i <= userSectionNumber; i++) {
		document.write(`<h1>Заголовок ${i}</h1>`)
		for (let num = 1; num <= i; num++) {
			document.write(`<p>Розділ ${num}, параграф ${num}</p>`)
		}
		document.write(`<br><hr>`)
	}
	document.write(`</div>`)
}
