// src/tests/math.test.js

const { soma, subtracao, multiplicacao, divisao } = require("../math");

test("soma de 2 + 3 deve ser 5", () => {
  expect(soma(2, 3)).toBe(5);
});

test("subtração de 10 - 4 deve ser 6", () => {
  expect(subtracao(10, 4)).toBe(6);
});

test("multiplicação de 3 * 7 deve ser 21", () => {
  expect(multiplicacao(3, 7)).toBe(21);
});

test("divisão de 20 / 5 deve ser 4", () => {
  expect(divisao(20, 5)).toBe(4);
});

test("divisão por zero deve lançar erro", () => {
  expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida");
});
