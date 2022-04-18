// Soldier
class Soldier {
  constructor(healthParam, strengthParam){
    this.health = healthParam;
    this.strength = strengthParam
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damageParam){
    this.health -= damageParam;;
  }
  
}
// Viking
class Viking extends Soldier {
  constructor(nameParam, healthParam, strengthParam){
  super(healthParam,strengthParam)
  this.name = nameParam
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damageParam){
    this.health -= damageParam;
    if(this.health > 0){
      return `${this.name} has received ${damageParam} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }

  battleCry = () => {
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health,strength)
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    var res = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if(this.saxonArmy[randomSaxon].health<=0){
      this.saxonArmy.splice(randomSaxon,1)
    }
    return res;
  }

  saxonAttack(){
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    var selectedViking = this.vikingArmy[randomViking]
    var selectedSaxon = this.saxonArmy[randomSaxon]
    var res = selectedViking.receiveDamage(selectedSaxon.strength);
    if(selectedViking.health<=0){
      this.vikingArmy.splice(randomViking,1)
    }
    return res;
  }

  showStatus(){
    if(this.saxonArmy.length===0){
      return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length===0){
      return "Saxons have fought for their lives and survived another day..."
    }else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
