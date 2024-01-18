export class Personagem {
    constructor(
        public nome: string, 
        public energia: number,  
        public ataque: number, 
        public defesa: number
        ){}
// TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARÂMETRO
// TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO 
        status(): string {
            return(
                '\n+++++Personagem+++++ \n' +
                ('\nNome: '+ this.nome) +
                ('\nEnergia: ' + this.energia) +
                ('\nAtaque: '+ this.ataque) +
                ('\nDefesa: ' + this.defesa)

            );
        }

        treinarAtaque(): void {
            this.ataque += Math.floor(Math.random() * 7);
            this.energia -= Math.floor(Math.random() * 10);
            if(this.ataque >= 100){
                this.ataque = 100;
            }
        }

        treinarDefesa(): void {
            this.defesa += Math.floor(Math.random() * 5);
            this.energia -= Math.floor(Math.random() * 10);
            if(this.defesa >= 100){
                this.defesa = 100;
            }
        }

        descansar(horas: number): void {
            this.energia += horas * (Math.floor(Math.random() * 5));
            if(this.energia >= 100){
                this.energia = 100; 
            }
        }

        batalhar(): number {
            let dano: number = Math.floor(Math.random() * 100)
            this.energia -= dano;
            return dano; 
        }

        isDead(): boolean {
            return this.energia < 0; 
        }
}


