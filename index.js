var virtualPet = {

    petName: prompt("Give your pet a name"),
    petType: prompt("What kind of pet is it? (e.g., 'dog', 'cat', 'dragon')."),
    petAge: +prompt("How old is your pet?"),
    petHappiness: +prompt("How happy is your pet? (a number between 0 and 100)"),
    petHunger: +prompt("How hungry is your pet? (a number between 0 and 100)"),

    agePet: function () {
        this.petAge += 1;
        this.petHappiness -= 5;
        this.petHunger += 10;

        if (this.petHappiness < 0) {
            this.petHappiness = 0;
        }

        if (this.petHunger > 100) {
            this.petHunger = 100;
        }

        alert(`${this.petName} is growing up! Now ${this.petName} is ${this.petAge} years old. But ${this.petName} is getting hungry (Hunger: ${this.petHunger}) and feeling a bit down (Happiness: ${this.petHappiness}). Time to feed and play!`);
    },

    feed: function () {
        if (this.petHunger <= 0) {
            this.petHunger = 0;
            alert(`${this.petName} is already full and can't eat more! No need to feed ${this.petName} right now.`);
        } else if (this.petHunger <= 10) {
            this.petHunger -= 10;
            alert(`${this.petName} enjoyed a  meal! Hunger level is now ${this.petHunger}. Keep an eye on it!`);
        } else {
            this.petHunger -= 20;
            alert(`${this.petName} enjoyed a  meal! Hunger level is now ${this.petHunger}. Keep an eye on it!`);
        }
    },

    play: function () {
        if (this.petHappiness >= 100) {
            this.petHappiness = 100;
            alert(`${this.petName} is already super happy`);
        } else if (this.petHappiness === 95) {
            this.petHappiness += 5;
            alert(`${this.petName} loved playing with you! Happiness is now at ${this.petHappiness}. Keep playing to make ${this.petName} even happier!`);
        } else {
            this.petHappiness += 10;
            alert(`${this.petName} loved playing with you! Happiness is now at ${this.petHappiness}. Keep playing to make ${this.petName} even happier!`);
        }
    }
};

var action = 0;
while (action !== 4) {

    action = +prompt(
        `What would you like to do with ${virtualPet.petName}? \n 
    1. Feed ${virtualPet.petName} \n
    2. Play with ${virtualPet.petName} \n
    3. Age ${virtualPet.petName} \n
    4. Quit
    `);

    switch (action) {
        case 1:
            virtualPet.feed();
            break;

        case 2:
            virtualPet.play();
            break;

        case 3:
            virtualPet.agePet();
            break;

        case 4:
            alert(`${virtualPet.petName} enjoyed spending time with you! See you soon!`);
            break;

        default:
            alert("Invalid choice. Please choose 1, 2, 3, or 4.");
    }
}
