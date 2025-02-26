"use sttrict"

if (confirm('Почати тестування?')) {
	const char = `o`

	for (let i = 12; i > 0; i--) {
		document.write(`<p></p>`)
		for (let j = i; j > 0; j--) {
			document.write(`${char}`)
		}
	}

}

