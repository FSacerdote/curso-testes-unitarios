import calculator from "../../src/calculator";


describe("Unit tests", () => {
  it("should sum two numbers", async () => {
    const num1 = randomNumber(0, 100)
    const num2 = randomNumber(0, 100)
    const result = calculator.sum(num1, num2)
    expect(result).toBe(num1 + num2)
  });

  it("should subtract two numbers", async () => {
    const num1 = randomNumber(0, 100)
    const num2 = randomNumber(0, 100)
    const result = calculator.sub(num1, num2)
    expect(result).toBe(num1 - num2)
  });
  it("should multiply two numbers", async () => {
    const num1 = randomNumber(0, 100)
    const num2 = randomNumber(0, 100)
    const result = calculator.mul(num1, num2)
    expect(result).toBe(num1 * num2)
  });

  it("should divide two numbers", async () => {
    const num1 = randomNumber(1, 100)
    const num2 = randomNumber(1, 100)
    const result = calculator.div(num1, num2)
    expect(result).toBe(num1/num2)
  });

  it("should return 0 when diving by zero", async () => {
    const num1 = randomNumber(1, 100)
    const result = calculator.div(num1, 0)
    expect(result).toBe(0)
  });
})

function randomNumber (min: number, max: number){
  return Math.floor(Math.random() * (max - min + 1) + min)
}