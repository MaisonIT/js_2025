"use strict"

// Вводмио дані
const goodsCost = parseInt(prompt(`Введіть вартість товару`, ``))
const goodsNumber = parseInt(prompt(`Введіть кількість товару`, ``))

// Обчислюємо вирази 
const totalCost = goodsNumber * goodsCost
const vat = (totalCost * 5) / 100

// Виводемо результат
document.write(`Загальна вартість = ${totalCost}</br>
	ПДВ = ${vat}
	`)