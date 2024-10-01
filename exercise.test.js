const calcularGastoCombustivel = require('./exercise.js');

test('Calcula corretamente o consumo com gasolina', () => {
    expect(calcularGastoCombustivel(32000, 'gasolina')).toBe(2); // 32km -> 2 litros
});

test('Calcula corretamente o consumo com etanol', () => {
    expect(calcularGastoCombustivel(22000, 'etanol')).toBe(2); // 22km -> 2 litros
});

test('Lança erro para distância negativa', () => {
    expect(() => {
        calcularGastoCombustivel(-1000, 'gasolina');
    }).toThrow("A distância deve ser um número positivo.");
});

test('Lança erro para combustível inválido', () => {
    expect(() => {
        calcularGastoCombustivel(1000, 'diesel');
    }).toThrow("O combustível deve ser 'gasolina' ou 'etanol'.");
});

test('Calcula consumo arredondado para o inteiro mais próximo', () => {
    expect(calcularGastoCombustivel(17000, 'gasolina')).toBe(2); // 17km -> 1.06 litros -> 2 litros
});
