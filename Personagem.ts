class Personagem {
    nome: string =  '';
    energia: number = 0; 
    vida: number = 0; 
    ataque: number = 0; 
    defesa: number = 0; 
}

let tony: Personagem; 
tony = new Personagem();
tony.nome = 'Tony Stark'; 
tony.ataque = 60; 
tony.energia = 70; 
tony.defesa = 50;
tony.vida = 100;
console.log('person:>>>',tony);

let hulk: Personagem = new Personagem();
hulk.nome = 'Hulk';
hulk.ataque = 80; 
hulk.energia = 80; 
hulk.vida = 100; 
hulk.defesa = 40; 