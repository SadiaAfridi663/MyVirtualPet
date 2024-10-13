function Pet(name, type, age, happiness, hunger) {
    this.petName = name;
    this.petType = type;
    this.petAge = age;
    this.petHappiness = happiness;
    this.petHunger = hunger;

    this.agePet = function () {
        this.petAge += 1
        this.petHappiness -= 5
        this.petHunger += 10
        alert(`${this.petName} aged up! Age: ${this.petAge}, Hunger: ${this.petHunger}, Happiness: ${this.petHappiness}.\nDon't forget to feed and play`)
    }

    this.feed = function () {
        if (this.petHunger <= 0) {
            this.petHunger = 0
            alert(`${this.petName} is full! No need to feed it right now`)
        }
        else if(this.petHunger === 10){
            this.petHunger -= 10
            alert(`You've fed your pet. Hunger level: ${this.petHunger} `)
        }else{
            this.petHunger -= 20
            alert(`You've fed your pet. Hunger level: ${this.petHunger} `)
        }
    }
   
    this.play = function () {
        if (this.petHappiness >= 100) {
            this.petHappiness = 100
            alert("Your pet is feeling great")
        }else if(this.petHunger === 95){
            this.petHappiness += 5
            alert(`You've played with your pet. Happiness level: ${this.petHappiness} `)
        }
        else {
            this.petHappiness += 10
            alert(`Your pet's happiness has increased to: ${this.petHappiness}. Keep playing for more fun!} `)
        }
    }
}
var petNameInput = prompt("Give your pet a name")
var petTypeInput = prompt("What kind of pet is it? (e.g., 'dog', 'cat', 'dragon').")
var petAgeInput = +prompt("How old is your pet?")
var petHappinessInput = +prompt("How happy is your pet? (a number between 0 and 100)")
var petHungerInput = +prompt("How hungry is your pet? (a number between 0 and 100)")

var myPet = new Pet(petNameInput, petTypeInput, petAgeInput, petHappinessInput, petHungerInput)
// console.log(`petName:${myPet.petName}, petType: ${myPet.petType},  petAge:,  petType: ${myPet.petType} ${myPet.petAge},  petHappiness: ${myPet.petHappiness},  petHunger: ${myPet.petHunger} `)
