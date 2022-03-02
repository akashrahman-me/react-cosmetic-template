export function pad(digit) {
	return digit < 10 ? '0' + digit.toString() : digit.toString()
}

export function discountParcentage(price, discount) {
	return price * ((100 - discount) / 100)
}
