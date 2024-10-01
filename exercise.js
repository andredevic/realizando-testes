function calcularGastoCombustivel(distanciaMetros, combustivel) {
    // Validando a distância
    if (typeof distanciaMetros !== 'number' || distanciaMetros < 0) {
        throw new Error("A distância deve ser um número positivo.");
    }

    // Validando o tipo de combustível
    if (combustivel !== 'gasolina' && combustivel !== 'etanol') {
        throw new Error("O combustível deve ser 'gasolina' ou 'etanol'.");
    }

    // Convertendo a distância de metros para quilômetros
    const distanciaKm = distanciaMetros / 1000;

    // Calculando o consumo de acordo com o combustível
    let consumoPorKm;
    if (combustivel === 'gasolina') {
        consumoPorKm = 16; // 16 km/l com gasolina
    } else if (combustivel === 'etanol') {
        consumoPorKm = 11; // 11 km/l com etanol
    }

    // Calculando os litros necessários
    const litrosNecessarios = distanciaKm / consumoPorKm;

    // Arredondando para o inteiro mais próximo
    return Math.ceil(litrosNecessarios);
}

module.exports = calcularGastoCombustivel;
