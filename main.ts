import prompt from 'prompt-sync';
import { Personagem } from "./Personagem";

let tony: Personagem = new Personagem('Tony', 60,80,70);

let hulk: Personagem = new Personagem('Hulk',80,880,100);

let teclado = prompt();
let option:number = 0; 

while(option !== 9 && !tony.isDead()) {
    console.log('*********Personagem*********');
    console.log('|1.Treinar ataque          |');
    console.log('|2.Treinar defesa          |');
    console.log('|3.Imprimir atributos      |');
    console.log('|4.Descansar               |');
    console.log('|5.Batalhar                |');
    console.log('|9.Sair                    |');
    console.log('****************************');

    option = +teclado('Escolha uma ação: ');
    
    switch(option) {
        case 1:
            tony.status();
            tony.treinarAtaque();
            break;

        case 2:
            tony.status();
            tony.treinarDefesa();
            break;
        case 3:
            tony.status();
            break;
        
        case 4:
            tony.status();
            tony.descansar();
            break;
        case 5:
            tony.status();
            tony.batalhar();
            break;
        
        case 9: 
            break;
    }
}