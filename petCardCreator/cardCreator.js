//Mandisa Harris-King PetCardCreator

//1. Create a constructor function named Pet. Each pet must have: a name, a type (dog, cat, falcon,  etc.), an age, and a Symbol for a unique ID key.
let id = Symbol("id");

function Pet(name, type, age, owner) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner;
    this[id] = Symbol("id");
    
    //Methods for object
    this.getDescription = function() {
        return `${this.name} is a ${this.type} and is ${this.age} years old!`;
    };

    this.haveBirthday = function() {
        currentAge = this.age;
        this.age +=1;

        return `${this.name} was ${currentAge} years old but just had a birthday! Now ${this.name} is ${this.age} years old!`;
    };

    this.getOwnerName = function() {
        return this.owner?.name ?? "none"; //searches if there is an owner in the object 
    };

    this.getID = function () {
        return this[id];
    }
}

//3. Create at least 3 pets using the new keyword. At least one pet must have an owner, and one pet must not have an owner.

let pet = new Pet("Charlie", "horse", 12);
let pet2 = new Pet("Zack", "dog", 3, {name: "Steve"} );
let pet3 = new Pet("Jim Bob", "cat", 4, {name: "Candy"} );

//Pet 1
console.log("Name: "+ pet.name);
console.log("Type: " + pet.type);
console.log("Age: " + pet.age + " years old");
console.log("Owner Name: " + pet.getOwnerName());
console.log("Description: " + pet.getDescription());
console.log("Pet ID: ", pet.getID());

//Pet 2
console.log("Name: " + pet2.name);
console.log("Type: " + pet2.type);
console.log("Age: " + pet2.age + " years old");
console.log("Owner Name: " + pet2.getOwnerName());
console.log("Description: " + pet2.getDescription());
console.log("Pet ID: ", pet2.getID());

//Pet 3
console.log("Name: " + pet3.name);
console.log("Type: " + pet3.type);
console.log("Age: " + pet3.age + " years old");
console.log("Owner Name: " + pet3.getOwnerName());
console.log("Description: " + pet3.getDescription());
console.log("Pet ID: ", pet3.getID());

//5. Call haveBirthday() on at least one pet and display the updated information to the console.
console.log(pet3.haveBirthday());

//6. Display the current date and time using the Date object in a console.log() (just a simple Date object is sufficient)
let today = new Date();
console.log(today);

//7. Reflection: At the bottom of your .js file, answer the following questions as comments:

// What does this refer to in your constructor and methods?
// Answer: 'This' is a keyword that is used to reference the object that comes before the dot and is used to call the method.

//What does optional chaining do in your code?
// Answer: Optional chaining is a way to access nested object properties. It also prevents evaluation if the value before the ?. is undefined or null. However, it is best practice not to overuse the optional chaining. 

//Why might the Date object be useful in a JS program?
//Answer:  The Date object may be useful in a JS program because you may need to quickly see the time and date and use it to calculate a new date that may be needed within the project. 




