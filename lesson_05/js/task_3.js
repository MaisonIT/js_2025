"use strict"

if (confirm('Почати тестування?')) {
	document.write(`<table><tr>`)
	for (let i = 1; i <= 7; i++) {
		document.write(`<td>${i}</td>`)

	}
	document.write(`</tr></table>`)
}

