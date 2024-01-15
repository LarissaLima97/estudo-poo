import prompt from 'prompt-sync';
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

let teclado = prompt();
let option:number = 0; 

while(option !== 9) {
    console.log('*********Personagem*********');
    console.log('|1.Treinar ataque          |');
    console.log('|2.Treinar defesa          |');
    console.log('|3.Imprimir atributos      |');
    console.log('|9.Sair                    |');
    console.log('****************************');

    option = +teclado('Escolha uma ação: ');
    
    switch(option) {
        case 1:
            tony.ataque += 2
            break;
        case 3:
            console.log(tony)
            break;
        
        case 9: 
            break;
    }
}

