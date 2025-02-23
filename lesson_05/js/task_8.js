"use strict"

if (confirm('Почати тестування?')) {
	const startNumberUser = parseInt(prompt(`Введіть початкове число`))
	const endUserNumber = parseInt(prompt(`Введіть кінцеве число`))
	let userNumber = parseInt(prompt(`Введіть число яке повинен вгадати компʼютер`))
	for (let i = 1; i <= 3; i++) {
		const computerNumber = startNumberUser + Math.floor(Math.random() * endUserNumber - startNumberUser + 1)
		document.write(`${computerNumber}<br>`)
		if (userNumber === computerNumber) {
			alert(`Вгадав з ${i} спроби`)
			break
		}
		else
			alert(`Не вгадав`)
	}
}
