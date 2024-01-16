export class Personagem {
    constructor(
        public nome: string, 
        public energia: number,  
        public ataque: number, 
        public defesa: number
        ){}
// TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARÂMETRO
// TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO 
        status(): void {
            console.log('+++++Personagem+++++');
            console.log('Nome: ', this.nome);
            console.log('Energia: ', this.energia);
            console.log('Ataque: ', this.ataque);
            console.log('Defesa: ', this.defesa);
        }

        treinarAtaque(): void {
            this.ataque += Math.floor(Math.random() * 7);
            this.energia -= Math.floor(Math.random() * 10);
            this.isDead();
            if(this.ataque >= 100){
                this.ataque = 100; 
                console.log('Seu ataque atingiu o nível máximo!');
            }
        }

        treinarDefesa(): void {
            this.defesa += Math.floor(Math.random() * 5);
            this.energia -= Math.floor(Math.random() * 10);
            this.isDead();
            if(this.defesa >= 100){
                this.defesa = 100; 
                console.log('Sua defesa atingiu o nível máximo!');
            }
        }

        descansar(): void {
            this.energia += Math.floor(Math.random() * 5);
            if(this.energia >= 100){
                this.energia = 100; 
                console.log('Sua energia atingiu o nível máximo!');
            }
        }

        batalhar(): void {
            this.isDead();
            this.energia -= Math.floor(Math.random() * 100);
        }

        isDead(): boolean {
            return this.energia < 0; 
        }
}


