export function sumEvenNumbers(array) {
  const evenNumbers = array.filter((number) => number % 2 === 0)
  const totalSum = evenNumbers.reduce((acc, number) => acc + number, 0)

  return totalSum
}