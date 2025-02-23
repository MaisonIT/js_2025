"use strict"

if (confirm('Почати тестування?')) {
	document.write(`<table>`)
	let count = 0
	for (let row = 1; row <= 3; row++) {
		document.write(`<tr>`)
		for (let column = 1; column <= 3; column++) {
			document.write(`<td>${++count}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}

