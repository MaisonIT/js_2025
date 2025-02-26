"use strict"

if (confirm('Почати тестування?')) {
	const char1 = `A`
	const char2 = `E`
	const char3 = `B`
	const char4 = `F`
	const char5 = `C`
	const char6 = `G`
	const char7 = `D`
	const char8 = `H`
	const char9 = `E`
	const char10 = `I`

	const char1Code = char1.charCodeAt(0)
	const char2Code = char2.charCodeAt(0)
	const char3Code = char3.charCodeAt(0)
	const char4Code = char4.charCodeAt(0)
	const char5Code = char5.charCodeAt(0)
	const char6Code = char6.charCodeAt(0)
	const char7Code = char7.charCodeAt(0)
	const char8Code = char8.charCodeAt(0)
	const char9Code = char9.charCodeAt(0)
	const char10Code = char10.charCodeAt(0)
	for (let num = char1Code; num <= char2Code; num++) {
		document.write(`${String.fromCharCode(num)} `)
	}
	document.write(`<br>`)
	for (let num = char3Code; num <= char4Code; num++) {
		document.write(`${String.fromCharCode(num)} `)
	}
	document.write(`<br>`)
	for (let num = char5Code; num <= char6Code; num++) {
		document.write(`${String.fromCharCode(num)} `)
	}
	document.write(`<br>`)
	for (let num = char7Code; num <= char8Code; num++) {
		document.write(`${String.fromCharCode(num)} `)
	}
	document.write(`<br>`)
	for (let num = char9Code; num <= char10Code; num++) {
		document.write(`${String.fromCharCode(num)} `)
	}
}

