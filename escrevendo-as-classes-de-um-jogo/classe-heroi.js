// class hero, classe que vai comportar caracteristicas do personagem
// metodos da classe: constructor, atacar

class hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar () {
        let mensagem = `o ${this.tipo} atacou usando `;
        switch(this.tipo) {
            case "mago": mensagem += "magia"; break;
            case "guerreiro": mensagem += "espada";  break;
            case "monge": mensagem += "artes marciais";  break;
            case "ninja": mensagem += "shuriken";  break;
        }
        console.log(mensagem);
    }
}

let personagem1 = new hero("Pirokinha", "20", "mago");

personagem1.atacar();