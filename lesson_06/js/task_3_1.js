"use strict"

if (confirm('Почати тестування?')) {
	const char = `o`
	document.write(`<div>`)
	for (let i = 12; i > 0; i--) {
		document.write(`<p></p>`)
		for (let j = i; j > 0; j--) {
			document.write(`${char}`)
		}
	}
	document.write(`</div>`)
}

