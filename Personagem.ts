class Personagem {
    constructor(
        public nome: string, 
        public energia: number, 
        public vida: number, 
        public ataque: number, 
        public defesa: number
        ){}
}

let tony: Personagem = new Personagem('Tony', 60,80,70,65);

let hulk: Personagem = new Personagem('Hulk',80,880,100,40);

