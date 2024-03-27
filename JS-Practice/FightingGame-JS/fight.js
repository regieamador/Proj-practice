let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p2attack = document.getElementById('attack1')
let p2heal = document.getElementById('heal1')
let p1attack = document.getElementById('attack')
let p1heal = document.getElementById('heal')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
let reset = document.getElementById('reset');

let p1Name = document.getElementById('p1Name');
let p2Name = document.getElementById('p2Name');


class Player{
  constructor(name, health, attackDamage){
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
  }

  strike(enemy, attack){
    let damage = Math.ceil(Math.random() * attack);
    enemy.health -= damage;

    update(p1, p2);
  }

  heal(player){
    let healAmount = Math.ceil(Math.random() * 10);
    player.health += healAmount;

    update(p1, p2);
  }
}

function update(p1, p2){
  if(p1.health <=0){
    declareWinner(p2);
  }
  else if(p2.health <= 0){
    declareWinner(p1);
  }

  p1HealthDiv.innerHTML = p1.health;
  p2HealthDiv.innerHTML = p2.health;
}

function declareWinner(winner){
  resultDiv.innerHTML = `Winner: ${winner.name}`;
}

function simulate(){
  while(p1.health > 0 && p2.health > 0){
    p1.strike(p2, p1.attackDamage);
    p2.strike(p1, p2.attackDamage);
    p2.heal(p2);
    p1.heal(p1);
  }
}


// Attack "Click"
p1attack.addEventListener("click", () => {
  p1.strike(p2, p1.attackDamage);
})
p2attack.addEventListener("click", () => {
  p2.strike(p1, p2.attackDamage);
})

// Heal "Click"
p1heal.addEventListener("click", () => {
  p1.heal(p1);
})
p2heal.addEventListener("click", () => {
  p2.heal(p2);
})

document.addEventListener("keydown", (event) =>{
  if(event.key == 'Q' || event.key == 'q'){
    p1.strike(p2, p1.attackDamage);
  }
  if(event.key == 'P' || event.key == 'p'){
    p2.strike(p1, p2.attackDamage);
  }

  if(event.key == 'A' || event.key == 'a'){
    p1.heal(p1);
  }
  if(event.key == 'L' || event.key == 'l'){
    p2.heal(p2);
  }
})

reset.addEventListener("click", () =>{
  p1.health = 100;
  p2.health = 100;

  p1HealthDiv.innerHTML = p1.health;
  p2HealthDiv.innerHTML = p2.health;
  resultDiv.innerHTML = "";
})

playButton.addEventListener("click", () => {
  simulate();
})


const p1 = new Player("Regie", 100, 15);
const p2 = new Player("Amador", 100, 15);
p1Name.innerHTML = p1.name;
p2Name.innerHTML = p2.name;