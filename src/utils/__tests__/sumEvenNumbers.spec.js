import { sumEvenNumbers } from "../sumEvenNumbers";

describe("sumEvenNumbers", () => {
  it("Should return 0 for an empty array", () => {
    const arrayMock = []
    const result = sumEvenNumbers(arrayMock)

    expect(result).toBe(0)
  })

  it("Should return 0 for an array without even numbers", () => {
    const ArrayMock = [1,3,5,7,9]
    const result = sumEvenNumbers(ArrayMock)

    expect(result).toBe(0)
  })

  it("Should return the sum of even numbers in a mixed array", () => {
    const arrayMock = [1,2,3,4,5,6,7,8,9]
    const result = sumEvenNumbers(arrayMock)

    expect(result).toBe(20)
  })

  it("Should return the sum of even numbers in an array with only even numbers", () => {
    const arrayMock = [2,4,6]
    const result = sumEvenNumbers(arrayMock)

    expect(result).toBe(12)
  })
})