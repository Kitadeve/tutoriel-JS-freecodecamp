let programmer = {
    name : 'Thomas',
    preferredLanguage: 'Javascript',
    writeCode: function() {
        console.log(`${this.name} writes ${this.preferredLanguage} code`);
    }, 
    drinkCoffe() {
        console.log(`${this.name} drinks coffee.`);
    }
};

programmer.writeCode()

function createProgrammer(name, preferredLanguage) {
    return{
        name,
        preferredLanguage,
        writeCode: function() {
            console.log(`${this.name} writes ${this.preferredLanguage} code`);
        }, 
        drinkCoffe() {
            console.log(`${this.name} drinks coffee.`);
        }
    }
}

const newProgrammer = createProgrammer ('Alice', 'Javascript');

newProgrammer.writeCode()




let groceryListItem = {
    name: 'Apples',
    quantity: '4',
    display: function() {
        console.log(`${this.quantity} x ${this.name}`)
    }
};

groceryListItem.display();

function createItem(quantity, name) {
    return {
        quantity,
        name,
        display() {
            console.log(`${this.quantity} x ${this.name}`)
        }
    }
}

const newItem = createItem('3', 'bananas')

newItem.display()