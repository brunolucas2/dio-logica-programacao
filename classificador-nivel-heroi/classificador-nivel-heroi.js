// Importando o módulo prompt-sync
const prompt = require("prompt-sync")();

//Definição de variaveis

let hero = {
    nome: "",
    xp: 0,
    nivel: ""
};

// Estrada de dados
do { 
    if (hero.nome === "") {
        hero.nome = prompt("Informe o nome do seu herói: "); 
    }

    hero.xp = Number(prompt("Informe a quantia de XP que você deseja atribuir ao seu herói: "));

} while (hero.nome === "" || hero.xp == 0);

// Classificação baesada na no XP
if (hero.xp <= 1000) {
    hero.nivel = "Ferro";
} else if (hero.xp <= 2000) {
    hero.nivel = "Bronze";
} else if (hero.xp <= 5000) {
    hero.nivel = "Prata";
} else if (hero.xp <= 7000) {
    hero.nivel = "Ouro";
} else if (hero.xp <= 8000) {
    hero.nivel = "Platina";
} else if (hero.xp <= 9000) {
    hero.nivel = "Ascendente";
} else if (hero.xp <= 10000) {
    hero.nivel = "Imortal";
} else if(hero.xp >= 10001){
    hero.nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${hero.nome} está no nível de ${hero.nivel}`);