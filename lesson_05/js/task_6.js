"use strict"

if (confirm('Почати тестування?')) {
	document.write(`<div><table>`)
	let count = 0
	for (let firstRow = 1; firstRow <= 3; firstRow++) {
		document.write(`<tr>`)
		for (let firstColumn = 1; firstColumn <= 3; firstColumn++) {
			document.write(`<td>${++count}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table></div>`)
	document.write(`<div><table>`)
	for (let secondRow = 1; secondRow <= 3; secondRow++) {
		document.write(`<tr>`)
		for (let secondColumn = 1; secondColumn <= 3; secondColumn++) {
			document.write(`<td>${++count}</td>`)
		}
	}
	document.write(`</table></div>`)
	document.write(`<div><table>`)
	for (let thirdRow = 1; thirdRow <= 3; thirdRow++) {
		document.write(`<tr>`)
		for (let thirdColumn = 1; thirdColumn <= 3; thirdColumn++) {
			document.write(`<td>${++count}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table></div>`)
}
