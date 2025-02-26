"use strict"

if (confirm('Почати тестування?')) {
	const char = `o`

	for (let i = 0; i < 7; i++) {
		document.write(`<p></p>`)
		for (let j = 0; j < i; j++) {
			document.write(`${char}`)
		}
	}
}
