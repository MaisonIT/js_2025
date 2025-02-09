"use strict"

// Вводимо необхідні дані 
const a = parseInt(prompt(`Введіть число a`, ``))
const b = parseInt(prompt(`Введіть число b`, ``))
const c = parseInt(prompt(`Введіть число с`, ``))

// Обчислюємо вирази
const s1 = a + 12 + b
const s2 = Math.sqrt((a + b) / 2 * a)
const s3 = Math.cbrt((a + b) * c)
const s4 = Math.sin(a / -b)

// Виводемо результати обчисленнь
document.write(`S<sub>1</sub> = ${s1.toFixed(2)} </br> 
S<sub>2</sub> = ${s2.toFixed(2)} <br>
S<sub>3</sub> = ${s3.toFixed(2)} </br>
S<sub>4</sub> = ${s4.toFixed(2)}	
`)
