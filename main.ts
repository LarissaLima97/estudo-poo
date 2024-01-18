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
            tony.treinarAtaque();
            console.log(tony.status());
            break;

        case 2:
            tony.treinarDefesa();
            console.log(tony.status());
            break;
        case 3:
            console.log(tony.status());
            break;
        
        case 4:
            let horas: number = +teclado('Digite o número de horas de descanso:');
            tony.descansar(horas);
            console.log(tony.status());
            break;
        case 5:
            let dano: number = tony.batalhar()
            console.log(`Esta batalha custou ${dano} de energia`);
            console.log(tony.status());
            break;
        
        case 9: 
            break;
    }
}