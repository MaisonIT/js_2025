"use strict"

if (confirm('Почати тестування?')) {
	function createTabel(message, row, col) {
		document.write(`<table>`)
		for (let tr = 1; tr <= row; tr++) {
			document.write(`<tr>`)
			for (let td = 1; td <= col; td++) {
				document.write(`<td>${message}</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`</table>`)
	}
	let message = prompt(`Введіть повідомлення в таблицю`)
	let row = parseInt(prompt(`Введіть кількість стовпців`))
	let col = parseInt(prompt(`Введіть кількість рядків`))
	createTabel(message, row, col)
}