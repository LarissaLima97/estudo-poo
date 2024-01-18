export class Personagem {
    constructor(
        private _nome: string, 
        private _energia: number,  
        private _ataque: number, 
        private _defesa: number
        ){}

// TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARÂMETRO
// TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO 

        public get nome() : string {
            return this._nome; 
        }

        
        public set nome(nome : string) {
            this._nome = nome;
        }
        
        public status(): string {
            return(
                '\n+++++Personagem+++++ \n' +
                ('\nNome: '+ this._nome) +
                ('\nEnergia: ' + this._energia) +
                ('\nAtaque: '+ this._ataque) +
                ('\nDefesa: ' + this._defesa)

            );
        }

        public treinarAtaque(): void {
            this._ataque += this.randomizar(7);
            this._energia -= this.randomizar(10);
            if(this._ataque >= 100){
                this._ataque = 100;
            }
        }

       
        public treinarDefesa(): void {
            this._defesa += this.randomizar(5);
            this._energia -= this.randomizar(10);
            if(this._defesa >= 100){
                this._defesa = 100;
            }
        }

        public descansar(horas: number): void {
            this._energia += horas * this.randomizar(5);
            if(this._energia >= 100){
                this._energia = 100; 
            }
        }

        public batalhar(): number {
            let dano: number = this.randomizar(100)
            this._energia -= dano;
            return dano; 
        }

        public isDead(): boolean {
            return this._energia < 0; 
        }

        private randomizar(num: number): number {
            return Math.floor(Math.random() * num)
        }
}


