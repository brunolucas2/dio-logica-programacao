// Importando o módulo prompt-sync
const prompt = require("prompt-sync")();

// Definição de variavel do jogador
let player = {
    nome: "",
    wins: 0,
    rank: ""
}

// Função responsável por calcular o rank
function rankCalculator(victoryBalance) {
    if (victoryBalance < 10) {
        return "Ferro";

    } else if (victoryBalance <= 20) {
        return "Bronze";

    } else if (victoryBalance <= 50) {
        return "Prata";

    } else if (victoryBalance <= 80) {
        return "Ouro";

    } else if (victoryBalance <= 90) {
        return "Diamante";

    } else if (victoryBalance <= 100) {
        return "Lendário";

    } else {
        return "Imortal";
    }
}

// Entrada
player.nome = prompt("Digite o nome do jogador: ");
player.wins = Number(prompt("Digite a quantidade de vitórias: "));

// Atribuindo o rank calculado
player.rank = rankCalculator(player.wins)

// Saída
console.log(`O Herói tem de saldo de: ${player.wins} vitorias, e está no nível: ${player.rank}`)