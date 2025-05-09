/**
 * Because javascript doesn't have a modulus operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder#description
 * @param a
 * @param b
 * @returns a mod b
 */
export function mod(a: number, b: number) {
	return ((a % b) + b) % b
}
