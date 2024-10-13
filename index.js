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
   
}