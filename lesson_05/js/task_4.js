"use sttrict"

if (confirm('Почати тестування?')) {
	document.write(`<table>`)
	for (let row = 1; row <= 3; row++) {
		document.write(`<tr>`)
		for (let column = 1; column <= 7; column++) {
			document.write(`<td>${column}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}

