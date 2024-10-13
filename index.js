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
}